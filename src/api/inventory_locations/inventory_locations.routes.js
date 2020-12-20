/*
* ROUTE: /api/v1/inventory_location
*/

const express = require( 'express' );
const controller = require( './inventory_locations.controller' );

const router = express.Router();

router.route( '/' )
	.get( controller.getAllInventoryLocations )
	.post( controller.createAnInventoryLocation );

router.route( '/:id' )
	.get( controller.getAInventoryLocationById )
	.patch( controller.updateAnInventoryLocation )
	.delete( controller.deleteAnInventoryLocation );

module.exports = router;

