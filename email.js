router.post('/send', function(req, res, next) {
	var helper = require('sendgrid').mail;
	var name = 'Samip';

	from_email = new helper.Email("samipjain1216@gmail.com");
	to_email = new helper.Email("samipjain1216@gmail.com");
	subject = "Hello World!";
	content = new helper.Content("text/html", "Hello -name-," + "<br><br>Welcome to NodeJS Family");
	mail = new helper.Mail(from_email, subject, to_email, content);

	substitution = new helper.Substitution("-name-", name)
		mail.personalizations[0].addSubstitution(substitution)
	
	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	})
});