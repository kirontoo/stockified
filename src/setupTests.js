// https://knexjs.org/#Migrations-API

const db = require( './db' );

// db is an instance of knex

module.exports = async () => {
	await db.migrate.rollback();
	await db.migrate.latest();
	await db.seed.run();
};
