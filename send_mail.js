// Aloow the following link for sending mail from here
// https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4Nxi870fKtPi8xOKvkaYjyEEByiXGJ4ihNEJhfnWQSPGX24Mu_tjioBSUTDHSeYzxidT6yQazEOsp8uKqZrvL61O0HybQ
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jaimin.micrasol@gmail.com',
      pass: 'Your PAss Word'
    }
  });
  
  var mailOptions = {
    from: 'jaimin.micrasol@gmail.com',
    to: 'chiragthummar4747@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('E-mail send Sucsessfylly');
    }
  });