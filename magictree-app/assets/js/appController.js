
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


app.controller("webController", [function(){
	this.pageVisited = ""
}])