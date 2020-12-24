/*
 * ROUTES: /api/v1/companies/
 */

const express = require( 'express' );
const controller = require( './companies.controller' );

const router = express.Router();

router.route( '/' )
	.get( controller.getAllCompanies );

router.route( '/:id' )
	.post( controller.createACompany )
	.patch( controller.updateACompany )
	.delete( controller.deleteACompany );

module.exports = router;

