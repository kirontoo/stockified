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

	console.log( 'User created:', {
		password
	}, createdUser );

	await knex( dbTableNames.country )
		.insert( countries );

	await knex( dbTableNames.state )
		.insert([{
			name: 'CA',
		},{
			name: 'AZ'
		}, {
			name: 'WA'
		}]);
};

