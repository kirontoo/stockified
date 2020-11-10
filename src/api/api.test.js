const supertest = require( 'supertest' );
const app = require( '../app' );

describe( 'GET /api/v1', () => {
	it( 'should respond with a message', async () => {
		const response = await supertest( app )
			.get( '/api/v1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.message ).toEqual( 'Home Inventory API' );
	});

	it( 'should respond with an individual state', async () => {
		const response = await supertest( app )
			.get( '/api/v1/states/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.id ).toBe( 1 );
	});

	it( 'should respond with a 404 on a state not found', async () => {
		const response = await supertest( app )
			.get( '/api/v1/states/1321' )
			.expect( 'Content-Type', /json/ )
			.expect( 404 );
	});


});
