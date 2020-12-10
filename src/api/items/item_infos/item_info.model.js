const { Model } = require( 'objection' );
const dbTableNames = require( '../../../constants/dbTableNames' );
const itemInfoSchema = require( './item_info.schema.json' );

class ItemInfo extends Model {
  static get tableName() {
    return dbTableNames.item_info;
  }

	static get jsonSchema() {
		return itemInfoSchema;
	}
}

module.exports = ItemInfo;

