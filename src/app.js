const express = require( 'express' );
const morgan = require( 'morgan' );
const compression = require( 'compression' );
const helmet = require( 'helmet' );
const middlewares = require( './middlewares' );

const app = express();
app.use( morgan( 'tiny' ));
app.use( compression() );
app.use( helmet() );

// body parsing
app.use( express.json() );

app.get( '/', ( req, res ) => {
	res.json({
		message: 'Home Inventory API'
	});
});

app.use( middlewares.notFound );
app.use( middlewares.errorHandler );

module.exports = app;
