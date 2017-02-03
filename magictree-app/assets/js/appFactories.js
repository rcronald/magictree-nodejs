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