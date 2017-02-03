app.factory("factory", ["$http", function(http)]){
	var factoryBuilder = {}
	var API_HOSTNAME = "http://localhost:1337"

	factoryBuilder.list = function(){
		return http.get(API_HOSTNAME + "/features")
	}

	factoryBuilder.details = function(id){
		return http.get(API_HOSTNAME + "/usuarios/" + id)
	}
	
}