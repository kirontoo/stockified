const express = require( 'express' );
const InventoryLocation = require( './inventory_locations.model' );

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

		return res.status( 501 ).send( "WIP" )
	} catch( error ) {
		next( error );
	}
}

async function updateAInventoryLocation( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" )
	} catch( error ) {
		next( error );
	}
}

async function createAInventoryLocation( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" )
	} catch( error ) {
		next( error );
	}
}

async function deleteAInventoryLocation( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" )
	} catch( error ) {
		next( error );
	}
}


module.exports = {
	getAllInventoryLocations,
	getAInventoryLocationById,
	deleteAnInventoryLocation: deleteAInventoryLocation,
	createAnInventoryLocation: createAInventoryLocation,
	updateAnInventoryLocation: updateAInventoryLocation
};
