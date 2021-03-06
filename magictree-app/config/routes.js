/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  '/homepage':{
    view: 'homepage'
  },
  '/aboutus':{
    view: 'aboutus'
  },
  '/library':{
    view: 'library'
  },
  '/news':{
    view: 'news'
  },
  '/blog':{
    view: 'blog'
  },
  '/contactus':{
    view: 'contactus'
  },
  '/treeCategory':{
    view: 'treeCategory'
  },
  '/tree':{
    view: 'tree'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  
  /****FEATURES****/
  'get /features': {
    controller: "FeaturesController",
    action: "list"
  },
  'get /features/:id': {
    controller: "FeaturesController",
    action: "details"
  },
  'post /features': {
    controller: "FeaturesController",
    action: "insert"
  },
  'put /features/:id': {
    controller: "FeaturesController",
    action: "update"
  },
  'delete /features/:id': {
    controller: "FeaturesController",
    action: "delete"
  },

  /****TREECATEGORIES****/
  'get /treeCategories': {
    controller: "TreeCategoriesController",
    action: "list"
  },
  'get /treeCategories/:id': {
    controller: "TreeCategoriesController",
    action: "details"
  },
  'post /treeCategories': {
    controller: "TreeCategoriesController",
    action: "insert"
  },
  'put /treeCategories/:id': {
    controller: "TreeCategoriesController",
    action: "update"
  },
  'delete /treeCategories/:id': {
    controller: "TreeCategoriesController",
    action: "delete"
  },

  /****TREES****/
  'get /trees': {
    controller: "TreesController",
    action: "list"
  },
  'get /trees/:categoryId/list': {
    controller: "TreesController",
    action: "listByCategory"
  },
  'get /trees/:id': {
    controller: "TreesController",
    action: "details"
  },
  'post /trees': {
    controller: "TreesController",
    action: "insert"
  },
  'put /trees/:id': {
    controller: "TreesController",
    action: "update"
  },
  'delete /trees/:id': {
    controller: "TreesController",
    action: "delete"
  },

  /****CONTACT****/
  'post /contact': {
    controller: "ContactController",
    action: "saveContact"
  }

};
