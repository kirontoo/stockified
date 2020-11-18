const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const itemSchema = require( './items.schema.json' );

class Item extends Model {
  static get tableName() {
    return dbTableNames.item;
  }

	static get jsonSchema() {
		return itemSchema;
	}
}

module.exports = Item;

