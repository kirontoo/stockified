const dbTableNames = require( '../../src/constants/dbTableNames' );
exports.seed = async( knex ) => {
	const [ tennesee, usa ] = await Promise.all([ 
		knex( dbTableNames.state ).where({
			code: 'TN',
		}).first(),

		knex( dbTableNames.country ).where({
			code: 'US'
		}).first()
	]);

	const [ address_id ] = await knex( dbTableNames.address ).insert({
		street_address_1: 'p.o. box 52330',
		street_address_2: 'dept. c',
		city: 'knoxville',
		zipcode: '37950-2330',
		latitude: 35.9603948,
		longitude: -83.9210261,
		state_id: tennesee.id,
		country_id: usa.id,
	}).returning( 'id' );

	await knex( dbTableNames.company ).insert({
		name: 'Bush Brothers & Company',
		logo_url: 'https://i.imgur.com/KRKQ7LZ.jpg',
		description:
		"Bush Brothers and Company is a family-owned corporation best known for its Bush's Best brand canned baked beans.",
		website_url: 'https://bushbeans.com/',
		email: 'help@bushbros.com',
		address_id,
	});

	await knex( dbTableNames.item_type ).insert({
		name: 'Canned Goods',
	});

	await knex( dbTableNames.inventory_location ).insert([
		{
			name: 'Kitchen Pantry',
		},
		{
			name: 'Basement Pantry',
		},
		{
			name: 'Basement Freezer',
		},
		{
			name: 'Kitchen Fridge',
		},
	]);
}
