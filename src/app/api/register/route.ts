// app/api/register/route.js

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return new Response(JSON.stringify({ data: 'post' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function GET(req: NextRequest) {
    return new Response(JSON.stringify({ data: 'get' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
