/*
* ROUTE: /api/v1/items
*/

const express = require( 'express' );
const itemsController = require( './items.controller' );
const itemInfosRouter = require( './item_infos/item_info.routes' );

const router = express.Router({ mergeParams: true });

router.use( '/:item_id/item_infos', itemInfosRouter );

router.route( '/' )
	.get( itemsController.getAllItems )
	.post( itemsController.createAItem );

router.route( '/:item_id' )
	.get( itemsController.getItemById );

module.exports = router;
