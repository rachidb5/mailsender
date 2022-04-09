const nodemailer = require("nodemailer");
require('dotenv').config();
const { base64encode, base64decode } = require('nodejs-base64');

exports.mailSender = async (req, res) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: req.body.SMTPdetails.host,
      port: req.body.SMTPdetails.port,
      secure: req.body.SMTPdetails.secure, // true for 465, false for other ports
      auth: {
        user: req.body.SMTPdetails.user, // generated ethereal user
        pass: req.body.SMTPdetails.password, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html,
     /* attachments: [
        { 
          filename: 'relato.pdf',
          content: base64decode(req.body.relato)
        },
      ]*/
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return res.status(201).send(req.body)
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

exports.tester = async (req, res) => {
  try {
    return res.status(200).send('ts')
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
}