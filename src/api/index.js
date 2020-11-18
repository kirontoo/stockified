const express = require( 'express' );
const router = express.Router();

// api routes
const states = require( './states/states.routes' );
const users = require( './users/users.routes' );
const addresses = require( './addresses/addresses.routes' );
const companies = require( './companies/companies.routes' );
const items = require( './items/items.routes' );
const auth = require( '../auth/auth.routes' );

router.get( '/', ( req, res ) => {
	res.json({
		message: 'Home Inventory API'
	});
});

router.use( '/states', states );
router.use( '/users', users );
router.use( '/addresses', addresses );
router.use( '/companies', companies );
router.use( '/items', items );
router.use( '/auth', auth );

module.exports = router;
