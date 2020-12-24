const supertest = require( 'supertest' );
const app = require( '../../app' );
const db = require( '../../db' );

afterAll( () => db.destroy() );

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
			.expect( 409 );
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

describe( 'PATCH /api/v1/companies/:id', () => {
	it( 'should update a company', async () => {
		const id = 3;
		const updatedCompany = {
			description: "An American grocery store that originated from California."	
		};

		const response = await supertest( app )
			.patch( `/api/v1/companies/${ id }` )
			.send( updatedCompany )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.description ).toEqual( updatedCompany.description );
	});

	it( 'should not change the id number', async ( done ) => {
		const response = await supertest( app )
			.patch( '/api/v1/companies/1' )
			.send({ id: 15 })
			.expect( 'Content-Type', /json/ )
			.expect( 403 );

		done();
	});
});

describe( 'DELETE /api/v1/companies/:id', () => {
	it( '', async ( done ) => {
		const response = await supertest( app )
			.delete( '/api/v1/companies/1' )
			.expect( 'Content-Type', /json/ )
			.expect( 200 );

		expect( response.body.deleted_at ).not.toBeNull();
		done();
	});
});
