/*
 * ROUTE: /api/v1/items
 */

const express = require( 'express' );
const Item = require( './items.model' );
const itemInfosRouter = require( './item_infos/item_info.routes' );

const router = express.Router({ mergeParams: true });


router.use( '/:item_id/item_infos', itemInfosRouter );

router.get( '/', async ( req, res, next ) => {
	try {
		const items = await Item
			.query()
			.where( 'deleted_at', null );

		return res.json( items );
	} catch ( error ) {
		next( error );
	}
});

router.get( '/:id', async ( req, res, next ) => {
	try {
		const items = await Item
			.query()
			.where( 'deleted_at', null )
			.andWhere( 'id', req.params.id )
			// .withGraphJoined( 'item_infos' ) // TODO: doesn't work
			.withGraphFetched( 'item_infos' )
			.first();

		return res.json( items );
	} catch ( error ) {
		next( error );
	}
});

router.post( '/', async ( req, res, next ) => {
	try {
		const item = await Item
			.query()
			.insert( req.body );

		return res.json( item );
	} catch( error ) {
		next( error );
	}
});

module.exports = router;
