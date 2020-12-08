const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );


describe( 'GET /api/v1/users', () => {
	it( 'should respond with an array of users', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/users' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.length ).toBeGreaterThan( 0 );
		done();
	});
});

