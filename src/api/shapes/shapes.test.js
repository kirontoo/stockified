const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );

describe( 'GET /api/v1/shapes', () => {
	it( 'should fetch all shapes', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/shapes' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		expect( response.body.length ).toBeGreaterThanOrEqual( 0 );
		done();
	});

	it( 'should fetch a shape by id', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/shapes/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toEqual(
			expect.objectContaining({
				id: 1,
				name: "box"
			}));

		done();
	});
});

