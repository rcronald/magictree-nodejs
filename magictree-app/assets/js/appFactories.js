
// Features Factory
app.factory("featuresFactory", ["$http", function(http){
	var factoryBuilder = {}
	var API_HOSTNAME = "http://localhost:1337"

	factoryBuilder.list = function(){
		return http.get(API_HOSTNAME + "/features")
	}

	factoryBuilder.details = function(id){
		return http.get(API_HOSTNAME + "/features/" + id)
	}

	factoryBuilder.insert = function(feature){
		return http.post(API_HOSTNAME + "/features", feature)
	}

	factoryBuilder.update = function(feature, id){
		return http.put(API_HOSTNAME + "/features/" + id, feature)
	}

	factoryBuilder.delete = function(id){
		return http.delete(API_HOSTNAME + "/features/" + id)
	}

	return factoryBuilder
}])


// TreeCategories Factory
app.factory("treeCategoriesFactory", ["$http", function(http){
	var factoryBuilder = {}
	var API_HOSTNAME = "http://localhost:1337"

	factoryBuilder.list = function(){
		return http.get(API_HOSTNAME + "/treeCategories")
	}

	factoryBuilder.details = function(id){
		return http.get(API_HOSTNAME + "/treeCategories/" + id)
	}

	factoryBuilder.insert = function(treeCategorie){
		return http.post(API_HOSTNAME + "/treeCategories", treeCategorie)
	}

	factoryBuilder.update = function(treeCategorie, id){
		return http.put(API_HOSTNAME + "/treeCategories/" + id, treeCategorie)
	}

	factoryBuilder.delete = function(id){
		return http.delete(API_HOSTNAME + "/treeCategories/" + id)
	}

	return factoryBuilder
}])


// TreeCategories Factory
app.factory("treeCategoriesFactory", ["$http", function(http){
	var factoryBuilder = {}
	var API_HOSTNAME = "http://localhost:1337"

	factoryBuilder.list = function(){
		return http.get(API_HOSTNAME + "/treeCategories")
	}

	factoryBuilder.details = function(id){
		return http.get(API_HOSTNAME + "/treeCategories/" + id)
	}

	factoryBuilder.insert = function(treeCategorie){
		return http.post(API_HOSTNAME + "/treeCategories", treeCategorie)
	}

	factoryBuilder.update = function(treeCategorie, id){
		return http.put(API_HOSTNAME + "/treeCategories/" + id, treeCategorie)
	}

	factoryBuilder.delete = function(id){
		return http.delete(API_HOSTNAME + "/treeCategories/" + id)
	}

	return factoryBuilder
}])