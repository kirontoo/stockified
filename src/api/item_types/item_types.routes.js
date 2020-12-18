const express = require( 'express' );
const controller = require( './item_types.controller' );

const router = express.Router();

router.route( '/' )
	.get( controller.getAllItemTypes )
	.post( controller.createAItemType );

router.route( '/:id' )
	.get( controller.getItemTypeById  )
	.patch( controller.updateAItemType )
	.delete( controller.deleteAItemType );

module.exports = router;

