/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/Test_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_Test_db_schema = [];
const db_Test_db = [];

/**
 * SCHEMA DB Test_db
 */



 /**
  * Annonce
  */
db_Test_db_schema.Annonce = new mongoose.Schema({
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
	/*
	userId: {
		type: Schema.ObjectId,
		ref : "User"
	},
	*/
});


 /**
  * User
  */
db_Test_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	userId: {
		type: Schema.ObjectId,
		ref : "Annonce"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./Test_db_customSchema.js');
var Test_db_model = require('./Test_db_crud.js');

// Declare mongoose model

db_Test_db.Annonce = Test_db_model.connection.model('Annonce', db_Test_db_schema.Annonce );
db_Test_db.User = Test_db_model.connection.model('User', db_Test_db_schema.User );

module.exports = db_Test_db;

// Create ADMIN user if does not exist
createUser.createUser();
