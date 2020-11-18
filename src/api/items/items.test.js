const supertest = require( 'supertest' );
const app = require( '../../app' );

describe( 'GET /api/v1/items', () => {
	it( 'should respond with an array of items', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/items' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		done();
	});
});


describe( 'POST /api/v1/items', () => {
	const item = {
		name: 'Baked Beans',
		description: 'It\'s the bean that started it all! Tender navy beans slow-cooked with specially cured bacon.',
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
