import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// I am going ro set up a public rout (home) and a protected rout (posts)
// We need to give the matcher a match for protected routes
//we need to write the match in regex
//You can add as many matches in [] as you want

const isProtectedRoute = createRouteMatcher(["/posts(.*)"]);

//We are going to use ClerkMiddleware to put together the matches and the matcher

//If the protected route match is in the request then prootect with authentication
export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();
});

export const config = {
  //The matcher will find matches ffor public and private routes. If the match is for a public route, middleware does not trigger.

  //If the match is for a private route, the matcher will trigger and will use middleware
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
