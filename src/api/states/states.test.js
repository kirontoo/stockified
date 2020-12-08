const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );

describe( 'GET /api/v1/states', () => {
	it( 'should respond with an array of states', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/states' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.length ).toBeGreaterThan( 0 );
		done();
 });
});

describe( 'GET /api/v1/states/:id', () => {
	it( 'should respond with an individual state', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/states/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.id ).toBe( 1 );
		done();
	});

	it( 'should respond with a 404 on a state not found', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/states/1321' )
			.expect( 'Content-Type', /json/ )
			.expect( 404 );

		done();
	});
});
