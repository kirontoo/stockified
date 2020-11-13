const express = require( 'express' );
const Address = require( './addresses.model' );

const router = express.Router();

router.get( '/', async ( req, res, next ) => {

	try {
		const addresses = await Address
			.query()
			.where( 'deleted_at', null );

		return res.json( addresses );
	} catch ( error ) {
		next( error );
	}
});

router.post( '/', async ( req, res, next ) => {
	try {
		const address = await Address
			.query()
			.insert( req.body );
		return res.json( address );
	} catch( error ) {
		next( error );
	}
});

module.exports = router;
