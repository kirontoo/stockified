const express = require( 'express' );

async function getASizeById( req, res, next ) {
	try {
	
		return res.status(500).send( "WORKING ON IT!" );
	} catch ( error ) {
		next( error );
	}
}

async function getAllSizes( req, res, next ) {
	try {
	
		return res.status(500).send( "WORKING ON IT!" );
	} catch ( error ) {
		next( error );
	}
}

async function updateASize( req, res, next ) {
	try {
	
		return res.status(500).send( "WORKING ON IT!" );
	} catch ( error ) {
		next( error );
	}
}

async function createASize( req, res, next ) {
	try {
	
		return res.status(500).send( "WORKING ON IT!" );
	} catch ( error ) {
		next( error );
	}
}

async function deleteASize( req, res, next ) {
	try {
	
		return res.status(500).send( "WORKING ON IT!" );
	} catch ( error ) {
		next( error );
	}
}

module.exports = {
	getASizeById,
	getAllSizes,
	createASize,
	updateASize,
	deleteASize
}
