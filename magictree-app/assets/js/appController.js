
// Features Controller
app.controller("featuresController", ["featuresFactory", function(featuresFactory){
	var self = this
	this.features = []
	this.feature = { }


	featuresFactory
		.list()
		.then(function(features){
			self.features = features.data
		})
		.catch(function(err){
			console.log(err)
		})

}])


// Web Controller
app.controller("webController", ["$location", function($location){
	this.visitedPage = "homepage"

	this.swichVisitedPage = function(url){
		var page = url.split("/").pop();
		this.visitedPage = page
	}

	this.getPage = function(){
		var url = $location.absUrl()
		//console.log($location)
		var page = url.split("/").pop();
		return page
	}
}])


// TreeCategories Controller
app.controller("treeCategoriesController", ["treeCategoriesFactory", "$location", function(treeCategoriesFactory, $location){
	var self = this
	this.categories = []
	this.category = { }

	treeCategoriesFactory
		.list()
		.then(function(treeCategories){
			self.categories = treeCategories.data
		})
		.catch(function(err){
			console.log(err)
		})


	this.getCategoryId = function(){
		var url = $location.absUrl()
		var page = url.split("/").pop();
		return page.split("=").pop();
	}
		
}])


// Tree Controller
app.controller("treesController", ["treesFactory", function(treesFactory){
	var self = this
	this.trees = []
	this.tree = { }
	this.categoryId = ""

	treeFactory
		.list(this.categoryId)
		.then(function(trees){
			self.trees = trees.data
		})
		.catch(function(err){
			console.log(err)
		})
	
		
}])


// ContactUs Controller
app.controller("contactController", ["contactFactory", function(contactFactory){
	var self = this
	this.formContact = {}
	this.messageSent = false
	//this.contactEmail = ""
	//this.contactName = ""
	//this.contactSubject = ""
	//this.contactMessage = ""

	this.sendContact = function(){
		console.log("sendContact")
		console.log(this.formContact)

		contactFactory
			.sendContact(this.formContact)
			.then(function(records){
				self.messageSent = true
			})
			.catch(function(err){
				console.log(err)
			})
	}
	
}])


app.controller("blogController", ["postsFactory", function(postsFactory){
	var self = this
	this.posts = []
	this.post = {}
	this.tab = 'blog';

	this.selectTab = function(setTab){
      self.tab = setTab;
      console.log(self.tab)
    }

    this.isSelected = function(checkTab){
      return self.tab === checkTab;
    }

	postsFactory
		.list()
		.then(function(posts){
			self.posts = posts.data
		})
		.catch(function(err){
			console.log(err)
		})

	this.addPost = function(){
    	self.post.createdOn = Date.now();
      	self.post.comments = [];
      	self.post.likes = 0;
      	self.posts.unshift(this.post);
      	self.tab = 0;
      	self.post ={};
    }


}])


app.controller('commentController', [function(){
	this.comment = {};
    this.addComment = function(post){
    	this.comment.createdOn = Date.now();
      	post.comments.push(this.comment);
      	this.comment ={};
    };
}])
