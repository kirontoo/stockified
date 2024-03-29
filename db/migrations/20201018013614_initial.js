const Knex = require( 'knex' );
const dbTableNames = require( '../../src/constants/dbTableNames' );
const {
	addDefaultColumns,
	createNameTable,
	addIdReference,
	addUrlColumn,
	addEmailColumn
} = require( '../../src/lib/dbTableUtils' );

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

		knex.schema.createTable( dbTableNames.inventory_location, ( table ) => {
			table.increments().notNullable();
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

	await knex.schema.createTable( dbTableNames.measurement_unit, ( table ) => {
		table.increments().notNullable();
		table.string( 'name', 254 ).notNullable().unique();
		table.string( 'abbreviation', 5 ).notNullable().unique();
		addDefaultColumns( table );
	});

	await knex.schema.createTable( dbTableNames.address , ( table ) => {
		table.increments().notNullable();
		table.string( 'street_address_1', 50 ).notNullable();
		table.string( 'street_address_2', 50 );
		table.string( 'city', 50 ).notNullable();
		table.string( 'zipcode', 15 ).notNullable();
		table.double( 'latitude' );
		table.double( 'longitude' );
		addIdReference( table, dbTableNames.state, false );
		addIdReference( table, dbTableNames.country );
		addDefaultColumns( table );

		table.unique([
			'street_address_1',
			'city',
			'zipcode',
			'country_id',
			'state_id'
		]);

		// needs to be separate to prevent duplicate addresses
		// with the same street_address_1
		table.unique( 'street_address_2' );
	});

	await knex.schema.createTable( dbTableNames.company, ( table ) => {
		table.increments().notNullable();
		table.string( 'name' ).notNullable().unique();
		addUrlColumn( table, 'logo_url' )
		table.string( 'description', 10000 );
		addUrlColumn( table, 'website_url' )
		addEmailColumn( table, 'email');
		addIdReference(table, 'address');
		addDefaultColumns( table );
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
		dbTableNames.measurement_unit,
		dbTableNames.inventory_location
	].map( tableName  => knex.schema.dropTableIfExists( tableName )));
};
