const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const addressSchema = require( './addresses.schema.json' );

class Address extends Model {
  // Table name is the only required property.
  static get tableName() {
    return dbTableNames.address;
  }

	static get jsonSchema() {
		return addressSchema;
	}
}
module.exports = Address;
