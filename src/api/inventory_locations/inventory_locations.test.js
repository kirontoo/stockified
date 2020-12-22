const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );

describe( 'GET /api/v1/inventory_locations', () => {
	it( 'should fetch all available inventory locations', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/inventory_locations' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		expect( response.body.length ).toBeGreaterThanOrEqual( 0 );
		done();
	});
});

describe( 'GET /api/v1/inventory_locations/:id', () => {
	it( 'should fetch one inventory location', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/inventory_locations/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Object );
		expect( response.body ).toMatchObject({
			name: "Kitchen Pantry",
			id: 1
		});

		done();
	});
});


describe( 'POST /api/v1/inventory_locations', () => {
	const inventoryLocation = {
		name: "Bathroom Cabinet"
	}

	it( 'should create a new inventory location', async ( done ) => {
		const response = await supertest( app )
			.post( '/api/v1/inventory_locations' )
			.send( inventoryLocation )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toMatchObject( inventoryLocation )
		done();
	});
});

describe( 'PATCH /api/v1/inventory_locations', () => {
	it( 'should update a inventory location', async ( done ) => {
		const response = await supertest( app )
			.patch( '/api/v1/inventory_locations/1' )
			.send({ name: 'Dining Room' })
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toMatchObject({
			name: 'Dining Room'
		});

		done();
	});

	it( 'should not be able to change the id', async ( done ) => {
		const response = await supertest( app )
			.patch( '/api/v1/inventory_locations/1' )
			.send({ id: 15 })
			.expect( 'Content-Type', /json/ )
			.expect( 400 );

		expect( response.body.id ).toEqual( 1 );
		done();
	});
});

describe( 'DELETE /api/v1/inventory_locations', () => {
	it( 'should delete a inventory location', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/inventory_locations/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.deleted_at ).not.toBeNull();
		done();
	});
});
