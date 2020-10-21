const Knex = require( 'knex' );
const dbTableNames = require( '../../src/constants/dbTableNames' );

function addDefaultColumns( table ) {
	table.timestamps( false, true );
	table.datetime( 'deleted_at' );
}

function createNameTable( knex, tableName) {
	return knex.schema.createTable( tableName, ( table ) => {
		table.increments().notNullable();
		table.string( 'name', 254 ).notNullable().unique();
		addDefaultColumns( table );
	});
}

function addIdReference( table, tableName ) {
	table.integer( `${tableName}_id` )
		.unsigned()
		.references( 'id' )
		.inTable( tableName )
		.onDelete( 'cascade' );
}

function addUrlColumn( table, columnName ) {
	table.string( columnName, 2000 );
}

function addEmailColumn( table, columnName ) {
	return table.string( columnName, 254 )
}

exports.up = async (knex) => {

	// these tables must be created first
	await Promise.all([
		knex.schema.createTable( dbTableNames.user, ( table ) => {
			table.increments().notNullable();
			addEmailColumn( table, 'email').notNullable().unique();
			table.string( 'name' ).notNullable();
			table.string( 'password', 100 ).notNullable();
			table.datetime( 'last_login' );
			addDefaultColumns( table );
		}),

		knex.schema.createTable( dbTableNames.location, ( table ) => {
			table.string( 'name' ).notNullable().unique();
			table.string( 'description', 1000 );
			addUrlColumn( table, 'image_url' );
			addDefaultColumns( table );
		}),

		createNameTable( knex, dbTableNames.item_type ),
		createNameTable( knex, dbTableNames.state ),
		createNameTable( knex, dbTableNames.country ),
		createNameTable( knex, dbTableNames.shape ),
	]);

	await knex.schema.createTable( dbTableNames.address , ( table ) => {
		table.increments().notNullable();
		table.string( 'street_address_1', 50 ).notNullable();
		table.string( 'street_address_2', 50 );
		table.string( 'city', 50 ).notNullable();
		table.string( 'zipcode', 15 ).notNullable();
		table.float( 'latitude' ).notNullable();
		table.float( 'longitude' ).notNullable();
		addIdReference( table, dbTableNames.state );
		addIdReference( table, dbTableNames.country );
	});

	await knex.schema.createTable( dbTableNames.company, ( table ) => {
		table.increments().notNullable();
		table.string( 'name' ).notNullable();
		addUrlColumn( table, 'logo_url' )
		table.string( 'description', 10000 );
		addUrlColumn( table, 'website_url' )
		addEmailColumn( table, 'email');
		addIdReference(table, 'address');
	});
};

// NOTE: order of table drop is important!!!
exports.down = async ( knex ) => {
	await Promise.all([
		dbTableNames.company,
		dbTableNames.address,
		dbTableNames.user,
		dbTableNames.item_type,
		dbTableNames.country,
		dbTableNames.state,
		dbTableNames.shape,
		dbTableNames.location
	].map( tableName  => knex.schema.dropTable( tableName )));
};
