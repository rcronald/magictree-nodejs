var mailgun = require("mailgun-js")

var apiKey = "key-f3223906d0ddbda59f1c2f80ebec7046"
	domain = "sandboxc152e28536424cad897fc55cde2bf7d4.mailgun.org"

var sender = mailgun({apiKey: apiKey, domain: domain})


/*module.export = {
	sendEmail : function(data, done){
		var message = {
			from: "rcronald@gmail.com",
			to: data.to,
			subject: data.subject,
			html: data.message
		}

		sender.messages().send(message, function(err, body){
			if (err) {
				console.log(err)
				console.log("Mailgun Error")
				return done(err)
			}else{
				console.log("Message sent")
				return done()
			}
		})
	}
}*/


var MailService = {  
  	sendEmail : function(data, done){
		var message = {
			from: "rcronald@gmail.com",
			to: data.to,
			subject: data.subject,
			html: data.message
		}

		

		sender.messages().send(message, function(err, body){
			if (err) {
				console.log(err)
				console.log("Mailgun Error")
				return done(err)
			}else{
				console.log("Message sent")
				return done()
			}
		})
	}
};


module.exports = MailService;  