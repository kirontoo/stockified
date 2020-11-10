const db = require( '../../db' );
const dbTableNames = require( '../../constants/dbTableNames' );

const fields = [ 'id', 'name', 'code' ];

module.exports = {
	find() {
		return db( dbTableNames.state ).select( fields );
	},

	async get( id ) {
	  return db( dbTableNames.state )
			.select( fields )
			.where({ id })		// id = id
			.first();
	}
};
