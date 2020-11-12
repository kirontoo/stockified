const express = require( 'express' );
const router = express.Router();

// api routes
const states = require( './states/states.routes' );
const users = require( './users/users.routes' );
const auth = require( '../auth/auth.routes' );

router.get( '/', ( req, res ) => {
	res.json({
		message: 'Home Inventory API'
	});
});

router.use( '/states', states );
router.use( '/users', users );
router.use( '/auth', auth );

module.exports = router;
