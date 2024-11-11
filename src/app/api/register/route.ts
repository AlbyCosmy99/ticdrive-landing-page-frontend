// app/api/register/route.js

import { NextResponse} from 'next/server';
import nodemailer from 'nodemailer'

export async function POST() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'newsletter.ticdrive@gmail.com',
      pass: 'zlfz fkxz lihh zcsf',
    },
  });
  const email = "dinamo1999@icloud.com"
  const verificationCode = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code

  await transporter.sendMail({
    from: 'newsletter.ticdrive@gmail.com',
    to: email,
    subject: 'Your Verification Code',
    text: `Your verification code is: ${verificationCode}`,
  });

  return NextResponse.json({ code: verificationCode });
}


// async function sendEmail(email: string) {
//   // Set up transporter with Gmail SMTP
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Benvenuto!',
//     text: 'TicDrive',
//     html: `
//       <div style="padding: 2rem; text-align: center;">
//         <h1>Benvenuto nel mondo di <span style="color: #737373;">Tic</span><span style="color: #00BF63;">drive</span>!</h1>
//         <p>Codice sconto: <b>TICDRIVE25</b></p>
//       </div>`,
//   };
  

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error);
//     } else {
//       console.log('Email sent successfully:', info.response);
//     }
//   });
// }




