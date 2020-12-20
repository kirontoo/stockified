const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const inventoryLocationSchema = require( './inventory_location.schema.json' );

class InventoryLocation extends Model {
  static get tableName() {
    return dbTableNames.inventory_location;
  }

	static get jsonSchema() {
		return inventoryLocationSchema;
	}
}

module.exports = InventoryLocation;

