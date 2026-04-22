import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function proxy(request: NextRequest){
    //return NextResponse.redirect(new URL("/", request.url));

// if (request.nextUrl.pathname ==='/profile'){
//     return NextResponse.redirect(new URL("routeHandlers/hello", request.nextUrl));
// }

const response = NextResponse.next();
const themePreference = request.cookies.get("theme");
if (!themePreference){
    response.cookies.set("theme", "dark");
}

response.headers.set("custom-header", "custom-value");

return response;

}


import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};



// export const config = {
//     matcher: ["/profile/:path*"],
// };