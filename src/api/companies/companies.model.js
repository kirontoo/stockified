const { Model } = require( 'objection' );
const dbTableNames = require( '../../constants/dbTableNames' );
const companySchema = require( './companies.schema.json' );

class Company extends Model {
  static get tableName() {
    return dbTableNames.company;
  }

	static get jsonSchema() {
		return companySchema;
	}
}

module.exports = Company;
