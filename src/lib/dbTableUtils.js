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

function addIdReference( table, tableName, notNullable = true, columnName = undefined ) {
	const definition = table.integer( `${ columnName || tableName}_id` )
		.unsigned()
		.references( 'id' )
		.inTable( tableName )
		.onDelete( 'cascade' );

	if ( notNullable ) {
		definition.notNullable();
	}

	return definition;
}

function addUrlColumn( table, columnName ) {
	table.string( columnName, 2000 );
}

function addEmailColumn( table, columnName ) {
	return table.string( columnName, 254 )
}

module.exports = {
	addDefaultColumns,
	createNameTable,
	addIdReference,
	addUrlColumn,
	addEmailColumn
};
