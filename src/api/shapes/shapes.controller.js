const express = require( 'express' );
const Shape = require( './shapes.model' );

async function getAllShapes ( req, res, next) {
	try {
		const shapes = await Shape
		.query()
		.where( 'deleted_at', null );

		return res.json( shapes );
	} catch ( error ) {
		next( error );
	}
}

async function getShapeById ( req, res, next ) {
	try {
		const id = Number( req.params.id );
		const shape = await Shape
			.query()
			.where( 'deleted_at', null )
			.andWhere( 'id', id )
			.withGraphFetched( 'sizes' )
			.first();

		return res.json( shape );
	} catch ( error ) {
		next( error );
	}
}

async function createAShape ( req, res, next ) {
	try {
		const shape = await Shape
			.query()
			.insert( req.body );

		return res.json( shape );
	} catch ( error ) {
		next( error );
	}
}

async function updateAShape ( req, res, next ) {
	try {
		const shape = await Shape.query().patchAndFetchById(
			req.params.id,
			req.body
		);
		
		return res.json( shape );
	} catch ( error ) {
		next( error );
	}
}

module.exports = {
	getAllShapes,
	getShapeById,
	createAShape,
	updateAShape
};
