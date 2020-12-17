/* 
*
* initial seed file
*
*/

const Knex = require( 'knex' );
const crypto = require( 'crypto' );
const bcrypt =require( 'bcrypt' );
const dbTableNames = require( '../../src/constants/dbTableNames' );
const countries = require( '../../src/constants/countries' );
const us_states = require( '../../src/constants/us_states' );

exports.seed = async ( knex ) => {
	await Promise.all( Object.keys( dbTableNames ).map( ( name ) => knex(name).del() ));

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

	// populate countries
	const insertedCountries = await knex( dbTableNames.country )
		.insert( countries, '*' );
	const usa = insertedCountries.find(( country ) => country.code === 'US' );

	// populate states
	us_states.forEach( ( state ) => { state.country_id = usa.id });
	await knex( dbTableNames.state ).insert( us_states );

	// populate unit of measuerments
	const unitOfMeasurements = [
		{ name: "millimeter", abbreviation: "mm" },
		{ name: "centimeter", abbreviation: "cm" },
		{ name: "meter", abbreviation: "m" },
		{ name: "inch", abbreviation: "in" },
		{ name: "foot", abbreviation: "ft" },
		{ name: "yard", abbreviation: "yd" },
	];

	await knex( dbTableNames.measurement_unit ).insert( unitOfMeasurements );
}
