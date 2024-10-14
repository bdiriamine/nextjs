import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Cookie cleared' });
  
  // Set the cookie with a past expiration date to clear it
  response.cookies.set('token', '', {
    expires: new Date(0),  // Setting expiration date to the past
    httpOnly: true,
  });

  return response;
}