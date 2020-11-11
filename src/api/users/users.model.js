const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const userSchema = require( './users.schema.json' );

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return dbTableNames.user;
  }

	static get jsonSchema() {
		return userSchema;
	}
}

module.exports = User;
