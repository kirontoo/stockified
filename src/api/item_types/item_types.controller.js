const express = require( 'express' );
const ItemType = require( './item_types.model' );
const date = require( '../../lib/date' );

async function getAllItemTypes ( req, res, next ) {
	try {
		const itemTypes = await ItemType
			.query()
			.where( 'deleted_at', null );

		return res.json( itemTypes );
	} catch ( error ) {
		next( error );
	}
}

async function getItemTypeById ( req, res, next ) {
	try {
		const id = Number( req.params.id );
		const itemType = await ItemType
			.query()
			.where( 'deleted_at', null )
			.andWhere( 'id', id )
			.first();

		return res.json( itemType );
	} catch ( error ) {
		next( error );
	}
}

async function createAItemType ( req, res, next ) {
	try {
		const itemType = await ItemType
			.query()
			.insert( req.body );

		return res.json( itemType );
	} catch ( error ) {
		next( error );
	}
}

async function updateAItemType ( req, res, next ) {
	try {
		if ( req.body["id"] && req.body["id"] != req.params.id ) { 
			res.status( 403 );
			throw new Error( "invalid request" );
		}
		const itemType = await ItemType
			.query()
			.patchAndFetchById( req.params.id, req.body )

		return res.json( itemType );
	} catch ( error ) {
		next( error );
	}
}

async function deleteAItemType ( req, res, next ) {
	try {
		const itemType = await ItemType
			.query()
			.patchAndFetchById( 
				req.params.id, 
				{ deleted_at: date.getCurrentDate() }
			);

		return res.json( itemType );
	} catch ( error ) {
		next( error );
	}
}

module.exports = {
	getAllItemTypes,
	getItemTypeById,
	createAItemType,
	updateAItemType,
	deleteAItemType
}
