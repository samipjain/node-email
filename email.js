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

	console.log(process.env.SENDGRID_API_KEY);
	var sg = require('sendgrid')('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');
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