// // app/api/register/route.js




// async function sendEmail(email: string) {
//   // Set up transporter with Gmail SMTP
  
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.mail.me.com', // iCloud SMTP server
//     port: 587, // Standard SMTP port
//     secure: false, // True for 465, false for other ports
//     auth: {
//       user: 'dinamo1999@icloud.com', // Your iCloud email
//       pass: 'kpyy-vnii-vxut-tdfn', // App-specific password generated from Apple ID account page
//     },
//   });

//   const mailOptions = {
//     from: 'dinamo1999@icloud.com',
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

import {NextRequest, NextResponse} from 'next/server';
// import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  // const formData = await req.formData();
  // const email = formData.get('email');

  return NextResponse.json({
    message: "test"
  })

  // if (typeof email === 'string') {
  //   await sendEmail(email);
  //   return NextResponse.redirect(new URL('/', req.url), 303);
  // } else {
  //   return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  // }
}




