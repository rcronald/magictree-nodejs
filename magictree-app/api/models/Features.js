/**
 * Features.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection : "someMongodbServer",
  attributes: {
  	name: "string",
  	picture: "string",
  	description: "string"
  }
};

// Features.find().exec(console.log)