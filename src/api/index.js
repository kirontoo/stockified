const express = require( 'express' );
const router = express.Router();

// api routes
const inventory_locations  =  require( './inventory_locations/inventory_locations.routes' );
const shapes               =  require( './shapes/shapes.routes' );
const item_types           =  require( './item_types/item_types.routes' );
const states               =  require( './states/states.routes' );
const countries            =  require( './countries/countries.routes' );
const users                =  require( './users/users.routes' );
const addresses            =  require( './addresses/addresses.routes' );
const companies            =  require( './companies/companies.routes' );
const items                =  require( './items/items.routes' );
const auth                 =  require( '../auth/auth.routes' );

router.get( '/', ( req, res ) => {
	res.json({
		message: 'Stockified API'
	});
});

router.use( '/inventory_locations', inventory_locations )
router.use( '/shapes', shapes );
router.use( '/item_types', item_types );
router.use( '/states', states );
router.use( '/countries', countries );
router.use( '/users', users );
router.use( '/addresses', addresses );
router.use( '/companies', companies );
router.use( '/items', items );
router.use( '/auth', auth );

module.exports = router;
