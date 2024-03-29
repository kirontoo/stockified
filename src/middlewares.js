const errorTypes = {
	ValidationError: 422,
	UniqueViolationError: 409
};

const errorMessages = {
	UniqueViolationError: 'This is a duplicate entry. Must be unique.'
}

function notFound( req, res, next ) {
	const error = new Error( `Not found - ${req.originalUrl}` );
	res.status( 404 );
	next( error );
}

function errorHandler( error, req, res, next ) {
	const statusCode = res.statusCode === 200 ? ( errorTypes[ error.name ] || 500 ) : res.statusCode;
	res.status( statusCode );

	res.json({
		status: statusCode,
		message: errorMessages[ error.name ] || error.message,
		stack: process.env.NODE_ENV === 'production' ? 'production stack' : error.stack,
		errors: error.errors || undefined
	});
}

// TODO: add middleware to validate jwt tokens

module.exports = { notFound, errorHandler };
