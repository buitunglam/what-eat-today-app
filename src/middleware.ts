import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18n.config";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  i18nRouter(req, i18nConfig);
  if (!isPublicRoute(req)) await auth.protect();
});

// applies this middleware only to files in the app directory
export const config = {
  matcher: [
    // "/((?!api|static|.*\\..*|_next).*)",
    // "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // // Always run for API routes
    // "/(api|trpc)(.*)",
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
