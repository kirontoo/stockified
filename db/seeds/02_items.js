const dbTableNames = require( '../../src/constants/dbTableNames' );

exports.seed = async ( knex ) => {

	const item = {
		name: 'Baked Beans',
		description: 'It\'s the bean that started it all! Tender navy beans slow-cooked with specially cured bacon.',
		item_type_id: 1,
		company_id: 1,
		user_id: 1
	}

	await knex( dbTableNames.item ).insert( item );
};
