const nodemailer = require("nodemailer");
require('dotenv').config();

exports.mailSender = async(req, res) =>{
    try {    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "mail.cremers.org.br",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'naoresponda@cremers.org.br', // generated ethereal user
          pass: '', // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Cremers" <naoresponda@cremers.org.br>', // sender address
        to: "jordan.rachid@gmail.com", // list of receivers
        subject: "Novo contato via Site (Denúncia)", // Subject line
        text: "Hello world?", // plain text body
        //html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      return res.status(201).send('Email enviado')
        } catch (e) {
                console.log(e);
                return res.status(400).json({ error: e });
            }
};
