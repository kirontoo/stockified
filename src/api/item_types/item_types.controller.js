const express = require( 'express' );
const ItemType = require( './item_types.model' );

async function getAllItemTypes ( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" );
	} catch ( error ) {
		next( error );
	}
}

async function getItemTypeById ( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" );
	} catch ( error ) {
		next( error );
	}
}

async function createAItemType ( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" );
	} catch ( error ) {
		next( error );
	}
}

async function updateAItemType ( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" );
	} catch ( error ) {
		next( error );
	}
}

async function deleteAItemType ( req, res, next ) {
	try {

		return res.status( 501 ).send( "WIP" );
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
