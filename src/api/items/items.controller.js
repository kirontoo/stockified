const Item = require( './items.model' );

async function getAllItems( req, res, next ) {
	try {
		const items = await Item
			.query()
			.where( 'deleted_at', null );

		return res.json( items );
	} catch( error ) {
		next( error );
	}
};

async function getItemById( req, res, next ) {
	try {
		const items = await Item
			.query()
			.where( 'deleted_at', null )
			.andWhere( 'id', req.params.item_id )
		// .withGraphJoined( 'item_infos' ) // TODO: doesn't work
			.withGraphFetched( 'item_infos' )
			.first();

		if ( !items ) {
			res.status( 404 );
			throw new Error( 'this item does not exist' );
		}

		return res.json( items );
	} catch ( error ) {
		next( error );
	}
}

async function createAItem( req, res, next ) {
	try {
		const item = await Item
			.query()
			.insert( req.body );

		return res.json( item );
	} catch( error ) {
		next( error );
	}
}

module.exports = {
	getItemById,
	getAllItems,
	createAItem
};
