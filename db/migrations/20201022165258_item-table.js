const {
	addDefaultColumns,
	addIdReference,
	addUrlColumn
} = require( '../../src/lib/dbTableUtils' );

const dbTableNames = require( '../../src/constants/dbTableNames' );

exports.up = async ( knex ) => {
	await knex.schema.table( dbTableNames.state, ( table ) => {
		table.string( 'code' );
		addIdReference( table, dbTableNames.country );
	});

	await knex.schema.table( dbTableNames.country, ( table ) => {
		table.string( 'code' );
	});

	await knex.schema.createTable( dbTableNames.size, ( table ) => {
		table.increments();
		table.string( 'name' ).notNullable();
		table.integer( 'length' );
		table.integer( 'width' );
		table.integer( 'height' );
		table.integer( 'volume' );
		addIdReference( table, dbTableNames.shape );
		addDefaultColumns( table );
	});

	await knex.schema.createTable( dbTableNames.item, ( table ) => {
		table.increments();
		table.string( 'name' );
		table.text( 'description' );
		table.string( 'sku', 42 );

		addIdReference( table, dbTableNames.user );
		addIdReference( table, dbTableNames.item_type );
		addIdReference( table, dbTableNames.company );
		addIdReference( table, dbTableNames.size, false );
		addDefaultColumns( table );
	});

	await knex.schema.createTable( dbTableNames.item_info, ( table ) => {
		table.increments();
		table.datetime( 'purchase_date' ).notNullable();
		table.datetime( 'expiration_date' );
		table.datetime( 'last_used' );
		table.float( 'purchase_price' ).defaultTo( 0 );
		table.float( 'msrp' ).notNullable().defaultTo( 0 );

		addIdReference( table, dbTableNames.company, false, 'retailer' );
		addIdReference( table, dbTableNames.inventory_location );
		addIdReference( table, dbTableNames.user );
		addIdReference( table, dbTableNames.item );
		addDefaultColumns( table );
	});

	await knex.schema.createTable( dbTableNames.item_image, ( table ) => {
		table.increments();
		addIdReference( table, dbTableNames.item );
		addUrlColumn( table, 'image_url' );
		addDefaultColumns( table );
	});

	await knex.schema.createTable( dbTableNames.related_item, ( table ) => {
		table.increments();
		addIdReference( table, dbTableNames.item );
		addIdReference( table, dbTableNames.item, false, 'related_item' );
		addDefaultColumns( table );
	});
};

exports.down = async ( knex ) => {
	await knex.schema.table( dbTableNames.state, ( table ) => {
		table.dropColumn( 'code' );
		table.dropColumn( 'country_id' );
	});

	await knex.schema.table( dbTableNames.country, ( table ) => {
		table.dropColumn( 'code' );
	});

	await Promise.all([
		dbTableNames.size,
		dbTableNames.item,
		dbTableNames.item_info,
		dbTableNames.item_image,
		dbTableNames.related_item,
	].reverse().map( name => knex.schema.dropTableIfExists( name ) ));
};
