// JWT 
// bcrypt

const express = require( 'express' );
const yup = require( 'yup' );
const bcrypt = require( 'bcrypt' );
const router = express.Router();

const jwt = require( '../lib/jwt' );
const User = require( '../api/users/users.model' );

const schema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.min( 2 )
		.matches( /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/ ).required(),
	email: yup
		.string()
		.trim()
		.email()
		.required(),

	// password must be 8-100 characters
	// have one uppercase, one lowercase character, one digit,
	// and a special character that includes !@#$%^&*+=-
	password: yup
		.string()
		.min( 8 )
		.max( 100 )
		.matches( 
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*+=-])[A-Za-z\d!@#$%^&*+=-]{8,}$/,
			'password must be at least 8 - 100 characters, have one uppercase, one lowercase character, one digit and a special character that includes !@#$%^&*+=-'
		)
});

const errorMessages = {
	invalidLogin: 'Invalid email or password.',
	emailInUse: 'Email already in use.'
}

router.post( '/signin', async ( req, res, next ) => {

	const { email, password } = req.body;

	try {
		// name must be included else the schema validator will throw an error
		// the name doesn't matter, we only want to validate the email and password
		await schema.validate( { name: 'Geralt', email, password }, {
			abortEarly: false
		});

		// check if user exists, and validate the password
		const user = await User.query().where({ email }).first();

		if ( !user ) { 
			res.status( 401 );
			throw new Error( errorMessages.invalidLogin );
		}

		const isValidPassword = await bcrypt.compare( password, user.password );
		if ( !isValidPassword ) {
			res.status( 401 );
			throw new Error( errorMessages.invalidLogin );
		}

		// generate jwt token
		const payload = {
			id: user.id,
			name: user.name,
			email
		}
		const token = await jwt.sign( payload );
		return res.json({ user: payload, token });

	} catch ( error ) {
		next( error );
	}
});

router.post( '/signup', async ( req, res, next ) => {
	const { name, email, password } = req.body;

	try {

		// validate new user info and check if user already exists
		const createUser = { name, email, password }
		await schema.validate( createUser, {
			abortEarly: false
		});

		const userExists = await User.query().where({ email }).first();

		if ( userExists ) { 
			res.status( 409 );
			throw new Error( errorMessages.emailInUse );
		}

		// hash the password, insert user to DB
		const hashedPassword = await bcrypt.hash( password, 12 );
		const newUser = await User.query().insert({ name, email, password: hashedPassword });
		delete newUser.password;

		// generate jwt token
		const payload = {
			id: newUser.id,
			name,
			email
		}

		const token = await jwt.sign( payload );

		return res.json({ user: payload, token });
	} catch ( error ) {
		next( error );
	}
});

module.exports = router;
