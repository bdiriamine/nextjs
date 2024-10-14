// pages/api/set-cookie.js

import { serialize } from 'cookie';

export default function handler(req, res) {
  res.setHeader('Set-Cookie', serialize('my-token', 'some-token-value', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 semaine
    path: '/',
  }));
  res.status(200).json({ message: 'Cookie set' });
}