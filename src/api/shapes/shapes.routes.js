/*
* ROUTE: /api/v1/shapes
*/

const express = require( 'express' );
const controller = require( './shapes.controller' );

const router = express.Router();

router.route( '/' )
	.get( controller.getAllShapes  );

router.route( '/:id' )
	.get( controller.getShapeById );


module.exports = router;
