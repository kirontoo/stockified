const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const imageUrlSchema = require( './image_urls.schema.json' );

class ImageUrl extends Model {
  static get tableName() {
    return dbTableNames.image_url;
  }

	static get jsonSchema() {
		return imageUrlSchema;
	}
}

module.exports = ImageUrl;

