/* 
*
* initial seed file
*
*/

const Knex = require( 'knex' );
const crypto = require( 'crypto' );
const bcrypt =require( 'bcrypt' );
const orderedTableNames = require( '../../src/constants/orderedTableNames' );
const dbTableNames = require( '../../src/constants/dbTableNames' );
const countries = require( '../../src/constants/countries' );
const us_states = require( '../../src/constants/us_states' );

exports.seed = async ( knex ) => {
	await orderedTableNames.reduce( async ( promise, table_name ) => {
		await promise;
		console.log( 'Clearing', table_name );
		return knex( table_name ).del();
	}, Promise.resolve());

	const password = crypto.randomBytes( 15 ).toString( 'hex' );

	const user = {
		email: 'ad@null.computer',
		name: 'AD',
		password: await bcrypt.hash( password, 12 )
	};

	const [ createdUser ] = await knex( dbTableNames.user )
		.insert( user )
		.returning( '*' );

	if ( process.env.NODE_ENV !== 'test' ) {
		console.log( 'User created:', {
			password,
		}, createdUser );
	}

	const insertedCountries = await knex( dbTableNames.country )
		.insert( countries, '*' );

	const usa = insertedCountries.find(( country ) => country.code === 'US' );
	us_states.forEach( ( state ) => { state.country_id = usa.id });
	await knex( dbTableNames.state ).insert( us_states );
}
