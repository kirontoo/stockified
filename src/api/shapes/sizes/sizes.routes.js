/*
* ROUTE: /api/v1/shapes/:shape_id/sizes
*/

const express = require( 'express' );
const Size = require( './sizes.model' );
const controller = require( './sizes.controller' );

const router = express.Router({ mergeParams: true });

router.route( '/' )
	.get( controller.getAllSizes )
	.post( controller.createASize )

router.route( '/:id' )
	.get( controller.getASizeById )
	.patch( controller.updateASize )
	.delete( controller.deleteASize );

module.exports = router;

