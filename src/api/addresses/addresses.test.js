const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );

describe( 'GET /api/v1/addresses', () => {
	it( 'should respond with a message', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/addresses' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		done();
	});
});

describe( 'POST /api/v1/addresses', () => {
	it( 'should insert a address', async ( done ) => {
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

		expect( response.body ).toEqual( 
			expect.objectContaining({
				...address
			}));
		done();
	});

	it( 'should fail to insert an address', async ( done ) => {
		const address = {
			street_address_1: '1234 walker st.',
			city: 'santa ana',
			state_id: 5
		}

		await supertest( app )
			.post( '/api/v1/addresses' )
			.send( address )
			.expect( 'Content-Type', /json/ )
			.expect( 422 );

		done();
	});

	it( 'should return a validation error on duplicate address', async ( done ) => {
		const address = {
			street_address_1: '1234 walker st.',
			city: 'santa ana',
			zipcode: '82358-7345',
			state_id: 5,
			country_id: 236
		}

		await supertest( app )
			.post( '/api/v1/addresses' )
			.send( address )
			.expect( 'Content-Type', /json/ )
			.expect( 409 );

		done();
	});
});

describe( 'PATCH /api/v1/addresses/:id', () => {
	it( 'should update an address', async ( done ) => {
		const address = {
			street_address_1: '1234 knott st.',
			city: 'irvine',
			state_id: 8,
			country_id: 236
		};

		const response = await supertest( app )
			.patch( '/api/v1/addresses/:id' )
			.send( address )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toEqual( expect.objectContaining( address ));
		done();
	});
});
