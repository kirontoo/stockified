const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );

describe( 'GET /api/v1/countries', () => {
	it( 'should fetch all countries', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/countries' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		expect( response.body.length ).toEqual( 250 );
		done();
	});
});


describe( 'GET /api/v1/countries/:id', () => {
	it( 'should fetch one country', async ( done ) => {
		const country = {
			name: "Tunisia",
			id: 227,
			code: "TN"
		}
		const response = await supertest( app )
			.get( `/api/v1/countries/${country.id}` )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toMatchObject( country );
		done();
	});
});

