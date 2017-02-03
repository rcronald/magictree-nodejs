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
// Features.create({name: "Environmental Developers", picture: "developers.jpg", description: "This website template has been designed by freewebsitetemplates for you, for free. You can replace all this text with your own text."}).exec(console.log)
// Features.create({name: "Landscaping Areas", picture: "golf-court.jpg", description: "This website template has been designed by freewebsitetemplates for you, for free. You can replace all this text with your own text."}).exec(console.log)
// Features.create({name: "Tress that helps", picture: "trees.jpg", description: "This website template has been designed by freewebsitetemplates for you, for free. You can replace all this text with your own text."}).exec(console.log)
