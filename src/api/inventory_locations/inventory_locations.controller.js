const express = require( 'express' );
const InventoryLocation = require( './inventory_location.model' );

async function getAllInventoryLocations( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" )
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

async function updateAnInventoryLocation( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" )
	} catch( error ) {
		next( error );
	}
}

async function createAnInventoryLocation( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" )
	} catch( error ) {
		next( error );
	}
}

async function deleteAnInventoryLocation( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" )
	} catch( error ) {
		next( error );
	}
}


module.exports {
	getAllInventoryLocations,
	getAInventoryLocationById,
	deleteAnInventoryLocation,
	createAnInventoryLocation,
	updateAnInventoryLocation
}
