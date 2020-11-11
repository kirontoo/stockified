const express = require( 'express' );
const router = express.Router();

// api routes
const states = require( './states/states.routes' );
const users = require( './users/users.routes' );

router.get( '/', ( req, res ) => {
	res.json({
		message: 'Home Inventory API'
	});
});

router.use( '/states', states );
router.use( '/users', users );

module.exports = router;
