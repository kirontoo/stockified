/*
* ROUTE: /api/v1/shapes
*/

const express = require( 'express' );
const controller = require( './shapes.controller' );
const sizesRouter = require( './sizes/sizes.routes' );

const router = express.Router({ mergeParams: true });

router.use( '/:shape_id/sizes', sizesRouter );

router.route( '/' )
	.get( controller.getAllShapes  )
	.post( controller.createAShape );

router.route( '/:id' )
	.get( controller.getShapeById )
	.patch( controller.updateAShape );

module.exports = router;
