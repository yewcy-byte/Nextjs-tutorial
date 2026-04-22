import { clerkClient, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/authentication/admin(.*)"]);

export const proxy = clerkMiddleware(async(auth, request) => {
  const { userId, redirectToSignIn } = await auth();

  if (isAdminRoute(request)) {
    if (!userId) {
      return redirectToSignIn();
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    const role = user.publicMetadata?.role;

    console.log("[clerk proxy debug]", {
      path: request.nextUrl.pathname,
      userId,
      role,
      publicMetadata: user.publicMetadata,
    });

    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!userId && !isPublicRoute(request)) {
    return redirectToSignIn();
  }

   /* if (!isPublicRoute(request)) {
        await auth.protect();
    }  */
  
    const response = NextResponse.next();
  const themePreference = request.cookies.get('theme');

  if (!themePreference) {
    response.cookies.set('theme', 'dark');
  }

  response.headers.set('custom-header', 'custom-value');
  return response;
});

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