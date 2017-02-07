
app.controller("featuresController", ["featuresFactory", function(featuresFactory){
	var self = this
	this.features = []
	this.feature = { }


	featuresFactory
		.list()
		.then(function(features){
			console.log("list")
			console.log(features)
			self.features = features.data
		})
		.catch(function(err){
			console.log(err)
		})





}])


app.controller("webController", ["$location", function($location){
	this.visitedPage = "homepage"

	this.swichVisitedPage = function(url){
		var page = url.split("/").pop();
		this.visitedPage = page
	}

	this.getPage = function(){
		var url = $location.absUrl()
		var page = url.split("/").pop();
		return page
	}
}])