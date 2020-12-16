const supertest = require( 'supertest' );
const app = require( '../../../app' );
const db = require( '../../../db' );

afterAll( () => db.destroy() );

describe( 'GET /api/v1/shapes/:shape_id/sizes', () => {
	it( 'should fetch all sizes', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/shapes/1/sizes' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		expect( response.body.length ).toBeGreaterThanOrEqual( 0 );

		done();
	});
});

describe( 'GET /api/v1/shapes/:shape_id/sizes/:id', () => {
	it( 'should fetch a size by id', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/shapes/1/sizes/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		// TODO
		done();
	});
});

describe( 'POST /api/v1/shapes/:shape_id/sizes/:id', () => {
	it( 'should create a new size', async ( done ) => {
		const size = {
			name: "small",
			length: 2,
			width: 3,
			height: 4,
			volume: 24,
		};

		const response = await supertest( app )
			.post( '/api/v1/shapes/1/sizes' )
			.send( size )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toMatchObject( size );
		done();
	});
});

describe( 'PATCH /api/v1/shapes/:shape_id/sizes/:id', () => {
	it( 'should update a size', async ( done ) => {
		const updated = {
			length: 3,
			width: 3,
			height: 3
		};

		const response = await supertest( app )
			.patch( '/api/v1/shapes/1/sizes/1' )
			.send( updated )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toEqual(
			expect.objectContaining( updated )
		);

		done();
	});
});

