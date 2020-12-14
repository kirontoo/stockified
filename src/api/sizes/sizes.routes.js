const express = require( 'express' );
const Size = require( './sizes.model' );
const controller = require( './sizes.controller' );

const router = express.Router();

router.route( '/' )
	.get( controller.getAllSizes )
	.post( controller.createASize )
	.delete( controller.deleteASize );

router.route( '/:id' )
	.get( controller.getASizeById )
	.patch( controller.updateASize );

module.exports = router;

