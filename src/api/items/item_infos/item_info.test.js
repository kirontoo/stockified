const supertest = require( 'supertest' );
const app = require( '../../../app' );

const db = require( '../../../db' );

afterAll( () => db.destroy() );

const item_info = {
	item_id: 1,
	user_id: 1,
	purchase_date: "2020-08-24",
	inventory_location_id: 2,
	msrp: 0.75,
	expiration_date: "2025-01-01"
};

describe( 'GET /api/v1/items/:item_id/item_infos', () => {
	it( 'should fetch all item info from a item', async ( done ) => {
		const response = await supertest( app )
			.get( `/api/v1/items/1/item_infos` )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		expect( response.body.length ).toBeGreaterThanOrEqual( 0 );
		done();
	});
});

describe( 'POST /api/v1/items/:id/item_infos', () => {
	it( 'should create a new item_info', async ( done ) => {
		const response = await supertest( app )
			.post( `/api/v1/items/${item_info.item_id}/item_infos` )
			.send( item_info )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toEqual(
			expect.objectContaining({
				id: 1,
				...item_info
			}));
		done();
	});

	// TODO: do I need this?
	it( 'should fail to create a new item_info', async ( done ) => {
		const response = await supertest( app )
			.post( `/api/v1/items/4/item_infos` )
			.send({
				item_id: 4,
				user_id: 1,
				purchase_date: "2020-08-24",
				inventory_location_id: 2,
				msrp: 0.75,
				expiration_date: "2025-01-01"
			})
			.expect( 'Content-Type', /json/ )
			.expect( 500 );

		done();
	});
});

describe( 'GET /api/v1/items/:item_id/item_infos/:id', () => {
	it( 'should fetch an item_info', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/items/1/item_infos/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		let { purchase_date, expiration_date, ...item } = item_info

		expect( response.body ).toMatchObject({
			id: 1,
			purchase_date: new Date( purchase_date ).toISOString(),
			expiration_date: new Date( expiration_date ).toISOString(),
			...item
		});
		done();
	});
});

