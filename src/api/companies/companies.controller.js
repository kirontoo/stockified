const Company = require( './companies.model' );
const date = require( '../../lib/date' );

async function getAllCompanies ( req, res, next ) {
	try {
		const companies = await Company
			.query()
			.where( 'deleted_at', null );

		return res.json( companies );
	} catch ( error ) {
		next( error );
	}
}

async function createACompany ( req, res, next ) {
	try {
		const company = await Company
			.query()
			.insert( req.body );

		return res.json( company );
	} catch( error ) {
		next( error );
	}
}

async function updateACompany ( req, res, next ) {
	try {
		if ( req.body["id"] && req.body["id"] != req.params.id ) { 
			res.status( 403 );
			throw new Error( "invalid request" );
		}

		const company = await Company
			.query()
			.patchAndFetchById( req.params.id, req.body)

		return res.json( company );
	} catch( error ) {
		next( error );
	}
}

async function deleteACompany ( req, res, next ) {
	try {
		const company = await Company
			.query()
			.patchAndFetchById( 
				req.params.id, 
				{ deleted_at: date.getCurrentDate() });

		return res.json( company );
	} catch ( error ) {
		next( error );
	}
}
module.exports = {
	getAllCompanies,
	createACompany,
	updateACompany,
	deleteACompany
}
