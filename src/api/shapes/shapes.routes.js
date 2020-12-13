/*
* ROUTE: /api/v1/shapes
*/

const express = require( 'express' );
const controller = require( './shapes.controller' );

const router = express.Router();

router.route( '/' )
	.get( controller.getAllShapes  )
	.post( controller.createAShape );

router.route( '/:id' )
	.get( controller.getShapeById )
	.patch( controller.updateAShape );

module.exports = router;
