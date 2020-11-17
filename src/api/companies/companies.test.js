const supertest = require( 'supertest' );
const app = require( '../../app' );

describe( 'GET /api/v1/companies', () => {
	it( 'should return all companies', async ( done ) => {
		const response = await supertest( app )
			.get( '/api/v1/companies' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toBeInstanceOf( Array );
		expect( response.body.length ).toBe( 1 );

		done();
	});
});


describe( 'POST /api/v1/companies', () => {
	it( 'should fail to add a new company to the DB', async () => {
		const company = {
			name: 'Bush Brothers & Company',
			logo_url: 'https://i.imgur.com/KRKQ7LZ.jpg',
			description:
			"Bush Brothers and Company is a family-owned corporation best known for its Bush's Best brand canned baked beans.",
			website_url: 'https://bushbeans.com/',
			email: 'help@bushbros.com',
			address_id: 1,
		}

		await supertest( app )
			.post( '/api/v1/companies' )
			.send( company )
			.expect( 'Content-Type', /json/ )
			.expect( 500 );
	});

	it( 'should add a new company to the DB', async () => {
		const company = {
			name: 'Stater Bros',
			logo_url: 'https://en.wikipedia.org/wiki/Stater_Bros.#/media/File:Stater_Bros.svg',
			description:
			"An American grocery store.",
			website_url: 'https://staterbros.com/',
			email: 'privacy@staterpros.com',
			address_id: 1,
		}

		const response = await supertest( app )
			.post( '/api/v1/companies' )
			.send( company )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body ).toMatchObject( company );
	});

});
