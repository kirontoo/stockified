const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const sizesSchema = require( './sizes.schema.json' );

class Size extends Model {
  static get tableName() {
    return dbTableNames.size;
  }

	static get jsonSchema() {
		return sizesSchema;
	}
}

module.exports = Size;

