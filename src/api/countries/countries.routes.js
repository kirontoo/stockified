/* 
 * ROUTES: /api/v1/countries
 */

const express = require( 'express' );
const queries = require( './countries.queries' );

const router = express.Router();

module.exports = router;

router.get( '/', async ( req, res ) => {
	const countries = await queries.find();
	return res.json( countries );
});

router.get( '/:id', async ( req, res, next ) => {
	const { id } = req.params;

	try {
		if ( isNaN( id ) ) {
			res.status( 422 );
			throw new Error( 'Invalid ID' );
		} else {
			const country = await queries.get( req.params.id );
			if ( country ) {
				return res.json( country );
			}

			// will respond with 404 not found
			return next();
		}
	} catch ( error ) {
		next( error );
	}
});
