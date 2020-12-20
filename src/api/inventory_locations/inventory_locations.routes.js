/*
* ROUTE: /api/v1/inventory_location
*/

const express = require( 'express' );
const Tablename = require( './Tablename.model' );

const router = express.Router();

router.route( '/' );
router.route( '/:id' );

module.exports = router;

