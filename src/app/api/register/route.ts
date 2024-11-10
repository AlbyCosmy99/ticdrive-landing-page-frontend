// app/api/register/route.js

import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get('email');

  console.log({message: 'Received', email: email});
  return NextResponse.redirect(new URL('/', req.url), 303);
}
