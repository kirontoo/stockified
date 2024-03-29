/*
 * ROUTES: /api/v1/addresses
 */

const express = require( 'express' );
const Address = require( './addresses.model' );
const controller = require( './addresses.controller' );

const router = express.Router();

router.route( '/' )
	.get( controller.getAllAddresses )
	.post( controller.createAAddress );

router.route( '/:id' )
	.patch( controller.updateAnAddress );

module.exports = router;
