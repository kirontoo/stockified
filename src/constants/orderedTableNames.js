const dbTableNames = require( './dbTableNames' );

// tables that depends on other tables should be dropped first
module.exports = [
	dbTableNames.item_type,
	dbTableNames.company,
	dbTableNames.address,
	dbTableNames.state,
	dbTableNames.country,
	dbTableNames.shape,
	dbTableNames.location,
	dbTableNames.user,
]
