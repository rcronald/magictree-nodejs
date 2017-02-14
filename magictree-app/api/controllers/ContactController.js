/**
 * ContactController
 *
 * @description :: Server-side logic for managing Contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	saveContact: function(req, res){
		var params = req.allParams();

		var data = {
			to: params.contactEmail,
			subject: "MagicTreeApp: " + params.contactSubject,
			message: params.contactName + ",<br>Thank you for contact us. A team member will contact you tomorrow with a detailed explanation of the product that fits your business need.<br><br>Thanks again for your inquiry.<br><br><br>Sincerely,<br>Ronald Requena"
		}

		/*MailService
			.sendEmail(data, function(err){
				if(err){
					res.negotiate(err)
				}else{
					res.ok()
				}
			})*/

		MailService.sendEmail(data, function(err){
			if(err){
				res.negotiate(err)
			}else{
				res.ok()
			}
		})
		
	}
};
