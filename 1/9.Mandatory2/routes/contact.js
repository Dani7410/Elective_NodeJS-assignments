const router = require("express").Router();
const nodemailer = require("nodemailer");
const dotenv = require ("dotenv");
require('dotenv').config();



const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));



let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
  });



router.post("/api/contact", (req, res) => {



const mailOptions = {
    to: 'joketovicarbejde@gmail.com',
    from: req.body.name + '<' + req.body.email + '>',
    subject: req.body.subject,
    text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });




    console.log(req.body.email);
    console.log(mailOptions);
    res.redirect("/contact");
});

module.exports = {
    router
};