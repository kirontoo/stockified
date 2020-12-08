const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const itemSchema = require( './items.schema.json' );
const ItemInfo = require('./item_infos/item_info.model');

class Item extends Model {
  static get tableName() {
    return dbTableNames.item;
  }

	static get jsonSchema() {
		return itemSchema;
	}

  static get relationMappings() {
    return {
      item_infos: {
        relation: Model.HasManyRelation,
        modelClass: ItemInfo,
        join: {
          from: `${dbTableNames.item}.id`,
          to: `${dbTableNames.item_info}.item_id`,
        },
      },
    };
  }
}

module.exports = Item;

