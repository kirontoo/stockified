const Address = require( './addresses.model' );

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
		[
			'street_address_1',
			'street_address_2',
			'city',
			'zipcode'
		].forEach( ( prop ) => {
			if ( req.body[ prop ] )
				req.body[ prop ] = req.body[ prop ]
					.toString()
					.toLowerCase()
					.trim();
		});

		const address = await Address
			.query()
			.insert( req.body );

		return res.json( address );
	} catch( error ) {
		next( error );
	}
}

module.exports = {
	getAllAddresses,
	createAAddress
};
