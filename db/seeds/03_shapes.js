const dbTableNames = require( '../../src/constants/dbTableNames' );

exports.seed = async ( knex ) => {
	const shape = {
		name: "box"
	};

	await knex( dbTableNames.shape ).insert([
		{ name: "box" },
		{ name: "bottle" },
		{ name: "cylindrical" },
		{ name: "circular" },
		{ name: "rectangular" },
		{ name: "square" },
		{ name: "cube" },
		{ name: "conical" },
		{ name: "pyramid" },
		{ name: "other" }
	]);
};
