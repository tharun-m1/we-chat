const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(mailTo, otp) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Wechat" <wechatservicemailer@gmail.com>', // sender address
    to: `${mailTo}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>OTP from weChat: ${otp} </b>`, // html body
  });

  return info;
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = { main };
