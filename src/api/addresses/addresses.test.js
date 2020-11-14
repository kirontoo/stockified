const supertest = require( 'supertest' );
const app = require( '../../app' );

describe( 'GET /api/v1/addresses', () => {
	it( 'should respond with a message', async () => {
		const response = await supertest( app )
			.get( '/api/v1/addresses' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.length ).toEqual( 0 );
	});

	it( 'should insert a address', async () => {
		const address = {
			street_address_1: '1234 walker st.',
			city: 'santa ana',
			zipcode: '82358-7345',
			state_id: 5,
			country_id: 236
		};

		const response = await supertest( app )
			.post( '/api/v1/addresses' )
			.send( address )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toEqual( address );
	});

	it( 'should fail to insert an address', async () => {
	});
});
