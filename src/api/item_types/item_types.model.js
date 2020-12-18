const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const itemTypeSchema = require( './item_types.schema.json' );

class ItemType extends Model {
  static get tableName() {
    return dbTableNames.ItemType;
  }

	static get jsonSchema() {
		return itemTypeSchema;
	}
}

module.exports = ItemType;

