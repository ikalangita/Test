
const app = require('../../../app.js');
const db_Test_db = require('../../../db/Test_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Annonce
 * 
	{
		description: {
			type: 'String'
		},
		titre: {
			type: 'String'
		},
		userId: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		userId: {
			type: Schema.ObjectId,
			ref : "User"
		},
		
	}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


