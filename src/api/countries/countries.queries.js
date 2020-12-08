const db = require( '../../db' );
const dbTableNames = require( '../../constants/dbTableNames' );

const fields = [ 'id', 'name', 'code' ];

module.exports = {
	find() {
		return db( dbTableNames.country ).select( fields );
	},

	async get( id ) {
	  return db( dbTableNames.country )
			.select( fields )
			.where({ id })		// id = id
			.first();
	}
};
