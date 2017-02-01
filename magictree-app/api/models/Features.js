/**
 * Features.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection : "someMongodbServer",
  attributes: {
  	featureId: {
  		primaryKey: true,
  		autoIncrement: true,
  		unique: true,
  		type: "integer"
  	},
  	name: "string",
  	picture: "string",
  	description: "string"
  }
};

//Features.create({name: "Environmental Developers", picture: "developers.jpg", description: "This website template has been designed by freewebsitetemplates for you, for free. You can replace all this text with your own text."}).exec(console.log)