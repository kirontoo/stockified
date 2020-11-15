const express = require( 'express' );
const queries = require( './states.queries' );
const router = express.Router();

router.get( '/', async ( req, res ) => {
	const states = await queries.find();
	res.json( states );
});

router.get( '/:id', async ( req, res, next ) => {
	const { id } = req.params;
	try {
		if ( isNaN( id ) ) {
			res.status( 422 );
			throw new Error( 'Invalid ID' );
		} else {
			const state = await queries.get( req.params.id );
			if ( state ) {
				return res.json( state );
			}

			// will respond with 404 not found
			return next();
		}
	} catch ( error ) {
		next( error );
	}
});

module.exports = router;
