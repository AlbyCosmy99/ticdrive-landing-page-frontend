import nodemailer from 'nodemailer'

// Set up transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'newsletter.ticdrive@gmail.com',
    pass: 'zlfz fkxz lihh zcsf',
  },
});

const mailOptions = {
  from: 'newsletter.ticdrive@gmail.com',
  to: 'albu.cosminandrei.1999@gmail.com',
  subject: 'Benvenuto!',
  text: 'TicDrive',
  html: `<div style="padding: 2rem; display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <img  src="../../../assets/logo.svg"/>
            <h1>Benvenuto nel mondo di <span style="color: #737373;">Tic</span><span style="color: #00BF63;">drive</span>!</h1>
            <p>Codice sconto: </span><b>TICDRIVE25</b></span>
        </div>`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
