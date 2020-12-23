const Address = require( './addresses.model' );

function transformData ( data ) {
	// converts property values into a string, trims whitespace 
	// and lowercases everything
	[
		'street_address_1',
		'street_address_2',
		'city',
		'zipcode'
	].forEach( ( prop ) => {
		if ( data[ prop ] )
			data[ prop ] = data[ prop ]
				.toString()
				.toLowerCase()
				.trim();
	});
	return data;
}

async function getAllAddresses ( req, res, next ) {
	try {
		const addresses = await Address
			.query()
			.where( 'deleted_at', null );

		return res.json( addresses );
	} catch ( error ) {
		next( error );
	}
}

async function createAAddress ( req, res, next ) {
	try {
		const data = transformData( req.body )

		const address = await Address
			.query()
			.insert( req.body );

		return res.json( address );
	} catch( error ) {
		next( error );
	}
}

async function updateAnAddress ( req, res, next ) {
	try {
		if ( req.body["id"] && req.body["id"] != req.params.id ) { 
			res.status( 403 );
			throw new Error( "invalid request" );
		}

		const data = transformData( req.body );
		const address = await Address
			.query()
			.patchAndFetchById( req.params.id , data );
		return res.json( address );
	} catch ( error ) {
		next( error );
	}
}

module.exports = {
	getAllAddresses,
	createAAddress,
	updateAnAddress
};
