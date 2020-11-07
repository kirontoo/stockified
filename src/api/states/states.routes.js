const express = require( 'express' );
const queries = require( './states.queries' );
const router = express.Router();

router.get( '/', async ( req, res ) => {

	const states = await queries.find();
	res.json([]);
});

module.exports = router;
