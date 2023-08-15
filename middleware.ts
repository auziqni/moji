import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/addjamaah",
    "/api/updatejamaah",
    "/api/deletejamaah",
    "/api/updatejamaahloc",
    "/api/settingIdTele",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
