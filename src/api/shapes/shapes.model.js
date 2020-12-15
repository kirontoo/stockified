const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const shapeSchema = require( './shapes.schema.json' );
const Size = require( './sizes/sizes.model' );

class Shape extends Model {
  static get tableName() {
    return dbTableNames.shape;
  }

	static get jsonSchema() {
		return shapeSchema;
	}
	
	static get relationMappings() {
		return {
			sizes: {
				relation: Model.HasManyRelation,
				modelClass: Size,
				join: {
					from: `${dbTableNames.shape}.id`,
					to: `${dbTableNames.size}.shape_id`
		}}};
	}
}

module.exports = Shape;

