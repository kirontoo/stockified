const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );

const item = {
	name: 'Baked Beans',
	description: 'It\'s the bean that started it all! Tender navy beans slow-cooked with specially cured bacon.',
	item_type_id: 1,
	company_id: 1,
	user_id: 1
}

describe( 'GET /api/v1/items', () => {
	it( 'should respond with an array of items', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/items' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		expect( response.body.length ).toBeGreaterThan( 0 );
		done();
	});
});

describe( 'GET /api/v1/items/:id', () => {
	it( 'should fetch an item', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/items/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toMatchObject( item );
		done();
	});

	it( 'should fail to fetch an item', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/items/138' )
			.expect( 'Content-Type', /json/ )
			.expect( 409 );

		expect( response.body ).toMatchObject( item );
		done();
	});
});

describe( 'POST /api/v1/items', () => {
	const item = {
		name: 'Kidney Beans',
		description: 'Originally from Italy, cannellini beans are quite popular in\
			the U.S. Their silky texture and nutty flavor make them a go-to bean for \
			pasta dishes, tuna salads and, of course, minestrone. We pick large, \
			smooth beans with a shiny finish to ensure hearty flavor. Try them in \
			Reduced Sodium!',
		item_type_id: 1,
		company_id: 1,
		user_id: 1
	}

	it( 'should add a new item', async ( done ) => {
		const response = await supertest( app )
			.post( '/api/v1/items' )
			.send( item )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toMatchObject( item );
		done();
	});

	it( 'should not add a duplicate item', async ( done ) => {
		await supertest( app )
			.post( '/api/v1/items' )
			.send( item )
			.expect( 'Content-Type', /json/ )
			.expect( 409 );

		done();
	});
});
