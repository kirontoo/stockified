const knex = require( 'knex' );
const { Model } = require( 'objection' );

const knexConfig = require( '../knexfile' );
const environment = process.env.NODE_ENV || 'development';

// grab environment from the knex config file
const connectionConfig = knexConfig[ environment ];

// create connection to db
const dbConnection = knex( connectionConfig );

Model.knex( dbConnection );

module.exports = dbConnection;
