const express = require( 'express' );
const router = express.Router();

// api routes
const states = require( './states/states.routes' );

router.get( '/', ( req, res ) => {
	res.json({
		message: 'Home Inventory API'
	});
});

router.use( '/states', states );

module.exports = router;
