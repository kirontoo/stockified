const knex = require( 'knex' );

const knexConfig = require( '../knexfile' );
const environment = process.env.NODE_ENV || 'development';

// grab environment from the knex config file
const connectionConfig = knexConfig[ environment ];

// create connection to db
const dbConnection = knex( connectionConfig );

module.exports = dbConnection;
