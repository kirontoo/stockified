/*
 * ROUTE: /api/v1/items/:item_id/item_infos/
 */

const express = require( 'express' );
const ItemInfo = require( './item_info.model' );

const router = express.Router({ mergeParams: true });

router.get( '/', async ( req, res, next ) => {
	try {
		const items = await ItemInfo
			.query()
			.where( 'deleted_at', null );

		return res.json( items );
	} catch ( error ) {
		next( error );
	}
});

router.get( '/:id', async ( req, res, next ) => {
	try {
		const item = await ItemInfo
			.query()
			.where( 'deleted_at', null )
			.andWhere( 'id', req.params.id )
			.first();

		return res.json( item );
	} catch ( error ) {
		next( error );
	}
});

router.post( '/', async ( req, res, next ) => {
	try {
		req.body.item_id = Number( req.params.item_id );
		const item = await ItemInfo
			.query()
			.insert( req.body );

		return res.json( item );
	} catch( error ) {
		next( error );
	}
});

router.patch( '/:id', async ( req, res, next ) => {
	try {
		const item = await ItemInfo.query().patchAndFetchById(
			req.params.id,
			req.body
		);

		return res.json( item );
	} catch ( error ) {
		next( error );
	}
});

module.exports = router;

