const db = require( '../../db' );
const dbTableNames = require( '../../constants/dbTableNames' );

module.exports = {
	find() {
		return db( dbTableNames.state ).select( 'id', 'name', 'code' );
	},
};
