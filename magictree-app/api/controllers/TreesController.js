/**
 * TreesController
 *
 * @description :: Server-side logic for managing Trees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	list: function(req, res){
		Trees
			.find()
			.then(function(records){
				res.json(records);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},
	paginatedList: function(req, res){
		var paginated = {page: req.params.pagina, limit: req.params.tamano};
		Trees
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
		Trees
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
		Trees
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
		Trees
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
		Trees
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
		Trees
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

