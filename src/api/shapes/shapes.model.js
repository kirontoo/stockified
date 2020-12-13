const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const shapeSchema = require( './shapes.schema.json' );

class Shape extends Model {
  static get tableName() {
    return dbTableNames.shape;
  }

	static get jsonSchema() {
		return shapeSchema;
	}
}

module.exports = Shape;

