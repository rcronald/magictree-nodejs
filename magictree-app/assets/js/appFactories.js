
// Features Factory
app.factory("featuresFactory", ["$http", "$location", function(http, location){
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


// Trees Factory
app.factory("treesFactory", ["$http", function(http){
	var factoryBuilder = {}
	var API_HOSTNAME = "http://localhost:1337"

	factoryBuilder.list = function(){
		return http.get(API_HOSTNAME + "/trees")
	}

	factoryBuilder.list = function(categoryId){
		return http.get(API_HOSTNAME + "/trees/"+ categoryId + "/list")
	}

	factoryBuilder.details = function(id){
		return http.get(API_HOSTNAME + "/trees/" + id)
	}

	factoryBuilder.insert = function(treeCategorie){
		return http.post(API_HOSTNAME + "/trees", treeCategorie)
	}

	factoryBuilder.update = function(treeCategorie, id){
		return http.put(API_HOSTNAME + "/trees/" + id, treeCategorie)
	}

	factoryBuilder.delete = function(id){
		return http.delete(API_HOSTNAME + "/trees/" + id)
	}

	return factoryBuilder
}])


// Contact factory
app.factory("contactFactory", ["$http", function(http){
	var factoryBuilder = {}
	var API_HOSTNAME = "http://localhost:1337"

	factoryBuilder.sendContact = function(form){
		return http.post(API_HOSTNAME + "/contact", form)
	}

	return factoryBuilder
}])


// Posts Factory
app.factory("postsFactory", ["$http", function(http){
	var factoryBuilder = {}
	var API_HOSTNAME = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131"

	factoryBuilder.list = function(){
		return http.get(API_HOSTNAME + "/posts_1.json")
	}

	factoryBuilder.details = function(id){
		return http.get(API_HOSTNAME + "/blog/" + id)
	}

	factoryBuilder.insert = function(post){
		return http.post(API_HOSTNAME + "/blogs", blog)
	}

	factoryBuilder.update = function(post, id){
		return http.put(API_HOSTNAME + "/blogs/" + id, post)
	}

	factoryBuilder.delete = function(id){
		return http.delete(API_HOSTNAME + "/blogs/" + id)
	}

	return factoryBuilder
}])