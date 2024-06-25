import createMiddleware from 'next-intl/middleware';
import {
    NextFetchEvent,
    NextRequest,
  } from 'next/server';
  

  const localeMiddleware = createMiddleware({
    locales: ['en-US'], // A list of all locales that are supported
    defaultLocale: 'en-US', // Used when no locale matches
    localePrefix: 'never', // All pages are behind auth so no need to put into path
  });
  
  export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
    return localeMiddleware(req);
  }
  
  export const config = {
    matcher: [
      // Taken from https://next-intl-docs.vercel.app/docs/routing/middleware#matcher-no-prefix
      // May need to update if we end up with routes with a dot in them
  
      // Match all pathnames except for
      // - … if they start with `/_next` or `/_vercel`
      // - … the ones containing a dot (e.g. `favicon.ico`)
      '/((?!_next|_vercel|.*\\..*).*)',
    ],
  };