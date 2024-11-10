// app/api/register/route.js

import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get('email');
  sendEmail(email)

  console.log({message: 'Received', email: email});
  return NextResponse.redirect(new URL('/', req.url), 303);
}

function sendEmail(email: string) {
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
    to: email,
    subject: 'Benvenuto!',
    text: 'TicDrive',
    html: `
      <div style="padding: 2rem; text-align: center;">
        <h1>Benvenuto nel mondo di <span style="color: #737373;">Tic</span><span style="color: #00BF63;">drive</span>!</h1>
        <p>Codice sconto: <b>TICDRIVE25</b></p>
      </div>`,
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}




