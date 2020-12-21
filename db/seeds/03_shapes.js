const dbTableNames = require( '../../src/constants/dbTableNames' );

exports.seed = async ( knex ) => {
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

	await knex( dbTableNames.size ).insert({
		name: "small",
		shape_id: 1,
		length: 2,
		width: 2,
		height: 2,
		volume: 8,
		measurement_unit_id: 1
	});
};

