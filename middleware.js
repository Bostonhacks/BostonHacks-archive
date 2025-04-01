import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;
  const queryUrl = url.searchParams.get('url');

  // Check if the 'url' query param exists
  if (queryUrl) {
    try {
      // Decode URL and extract the path
      const decodedUrl = decodeURIComponent(queryUrl);

      // Check for valid pattern like /2024/_next/static/media/*
      const match = decodedUrl.match(/^\/(20[1-9][0-9])\/_next\/static\/media\/(.+)$/);

      if (match) {
        const year = match[1];
        const filePath = match[2];

        // Rewrite the URL to the correct path
        return NextResponse.redirect(
          `${url.origin}/${year}/_next/static/media/${filePath}`
        );
      }
    } catch (e) {
      console.error('Error decoding URL:', e);
    }
  }

  // Continue normally if no match
  return NextResponse.next();
}
