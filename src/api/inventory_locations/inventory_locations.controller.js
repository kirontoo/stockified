const express = require( 'express' );
const InventoryLocation = require( './inventory_locations.model' );
const date = require( '../../lib/date' );

async function getAllInventoryLocations( req, res, next ) {
	try {
		const inventoryLocations = await InventoryLocation
			.query()
			.where( 'deleted_at', null );

		return res.json( inventoryLocations );
	} catch( error ) {
		next( error );
	}
}


async function getAInventoryLocationById( req, res, next ) {
	try {
		const inventoryLocation = await InventoryLocation
			.query()
			.where( 'deleted_at', null )
			.findById( req.params.id )
			.first();

		return res.json( inventoryLocation );
	} catch( error ) {
		next( error );
	}
}

async function updateAInventoryLocation( req, res, next ) {
	try {
		if ( req.body["id"] && req.body["id"] != req.params.id ) { 
			res.status( 403 );
			throw new Error( "invalid request" );
		}

		const inventoryLocation = await InventoryLocation
			.query()
			.patchAndFetchById( req.params.id , req.body );

		return res.json( inventoryLocation );
	} catch( error ) {
		next( error );
	}
}

async function createAInventoryLocation( req, res, next ) {
	try {
		const inventoryLocation = await InventoryLocation
			.query()
			.insert( req.body );
		return res.json( inventoryLocation );
	} catch( error ) {
		next( error );
	}
}

async function deleteAInventoryLocation( req, res, next ) {
	try {
		const inventoryLocation = await InventoryLocation
			.query()
			.patchAndFetchById( 
				req.params.id, 
				{ deleted_at: date.getCurrentDate() }
			);

		return res.json( inventoryLocation );
	} catch( error ) {
		next( error );
	}
}


module.exports = {
	getAllInventoryLocations,
	getAInventoryLocationById,
	deleteAInventoryLocation,
	createAInventoryLocation,
	updateAInventoryLocation
};
