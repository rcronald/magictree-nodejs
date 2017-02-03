/**
 * FeaturesController
 *
 * @description :: Server-side logic for managing features
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	list: function(req, res){
		Features
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
		Features
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
		Features
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
		Features
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
		Features
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
		Features
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
		Features
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