/**
 * TreeCategoriesController
 *
 * @description :: Server-side logic for managing Treecategories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	list: function(req, res){
		TreeCategories
			.find()
			.populate("trees")
			.then(function(records){
				res.json(records);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},
	paginatedList: function(req, res){
		var paginated = {page: req.params.pagina, limit: req.params.tamano};
		TreeCategories
			.find()
			.paginate(paginado)
			.then(function(records){
				res.json({records: records});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},
	count: function(req, res) {
		TreeCategories
			.count()
			.then(function(quantity){
				res.json({quantity: quantity});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},
	insert: function(req, res){
		var data = req.allParams();
		TreeCategories
			.create(data)
			.then(function(records){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},
	update: function(req, res){
		var data = req.allParams();
		var filtro = {id: req.params.id};
		TreeCategories
			.update(filtro, data)
			.then(function(records){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	},
	delete: function(req, res){
		var filtro = {id: req.params.id};
		TreeCategories
			.destroy(filtro)
			.then(function(records){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});	
	},
	details: function(req, res) {
		var filtro = {id: req.params.id};
		TreeCategories
			.find()
			.where(filtro)
			.then(function(records){
				res.json({records: records});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	}
};