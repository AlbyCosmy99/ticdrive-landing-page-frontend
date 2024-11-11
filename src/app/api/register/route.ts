// app/api/register/route.js

import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get('email');
  console.log(email)
  if (typeof email === 'string') {
    await sendEmail(email);
    return NextResponse.redirect(new URL('/', req.url), 303);
  } else {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }
}


async function sendEmail(email: string) {
  // Set up transporter with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
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




