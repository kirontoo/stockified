const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );

describe( 'GET /api/v1/item_types', () => {
	it( 'should fetach all item types', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/item_types' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		expect( response.body.length ).toBeGreaterThanOrEqual( 0 );
		done();
	});
});

describe( 'GET /api/v1/item_types/:id', () => {
	it( 'should fetch a item type', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/item_types/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toMatchObject({
			name: 'Canned Goodes',
			id: 1
		});

		done();
	});
});

describe( 'POST /api/v1/item_types', () => {
	it( 'should create an item type', async ( done ) => {
		const itemType = { name: "Electronics" };
		const response = await supertest( app )
			.post( '/api/v1/item_types' )
			.send( itemType )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toEqual(
			expect.objectContaining({
				id: 2,
				...itemType
		}));

		done();
	});
});

describe( 'PATCH /api/v1/item_types/:id', () => {
	it( 'should update the name of a item type', async ( done ) => {
		const updatedName = { name: 'Keyboards' };
		const response = await supertest( app )
			.patch( '/api/v1/item_types/2' )
			.send( updatedName )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toEqual( expect.objectContaining({
			id: 2,
			...updatedName
		}));
		done();
	});

	it( 'should not update the id', async ( done ) => {
		const response = await supertest( app )
			.patch( '/api/v1/item_types/2' )
			.send( { id: 3 } )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.id ).toEqual( 2 );
		done();
	});
});

describe( 'DELETE /api/v1/item_types/:id', () => {
	it( 'should delete a item type', async ( done ) => {
		const response = await supertest( app )
			.delete( '/api/v1/item_types/2' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.deleted_at ).not.toBeNull();
		done();
	});
});
