/*
* ROUTE: /api/v1/inventory_location
*/

const express = require( 'express' );
const controller = require( './inventory_locations.controller' );

const router = express.Router();

router.route( '/' )
	.get( controller.getAllInventoryLocations )
	.post( controller.createAInventoryLocation );

router.route( '/:id' )
	.get( controller.getAInventoryLocationById )
	.patch( controller.updateAInventoryLocation )
	.delete( controller.deleteAInventoryLocation );

module.exports = router;

