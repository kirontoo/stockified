const express = require( 'express' );
const Size = require( './sizes.model' );

async function getASizeById( req, res, next ) {
	try {
		const size = await Size
			.query()
			.where( 'deleted_at', null )
			.first();
	
		return res.json( size );
	} catch ( error ) {
		next( error );
	}
}

async function getAllSizes( req, res, next ) {
	try {
		const shape_id = Number( req.params.shape_id );
		const sizes = await Size
			.query()
			.where( 'deleted_at', null )
			.andWhere( 'shape_id', shape_id );
	
		return res.json( sizes );
	} catch ( error ) {
		next( error );
	}
}

async function updateASize( req, res, next ) {
	try {
		req.params.id = Number( req.params.id )
		const size = await Size.query().patchAndFetchById(
			req.params.id,
			req.body
		);
	
		return res.json( size );
	} catch ( error ) {
		next( error );
	}
}

async function createASize( req, res, next ) {
	try {
		req.body.shape_id = Number( req.params.shape_id );
		const size = await Size
			.query()
			.insert( req.body );
	
		return res.json( size );
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
