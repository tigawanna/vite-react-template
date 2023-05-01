import { ProfileLayout } from "@/pages/profile/ProfileLayout";
import App from "../App";
import { IndexRoute } from "../pages/root/Index";
import { Router, Route,RootRoute,} from "@tanstack/router";
import { Profile } from "@/pages/profile/Profile";
import { ProfileUser } from "@/pages/profile/ProfileUser";
import { Aboutlayout } from "@/pages/about/Aboutlayout";
import { About } from "@/pages/about/AboutIndex";

// Create a root route
const rootLayout = new RootRoute({
  component: App,
});


// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootLayout,
  path: "/",
  component: IndexRoute,
});




// about route
const aboutLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "/about",
  component: Aboutlayout,
});


const AboutRoute = new Route({
    getParentRoute: () => aboutLayout,
    path: "/",
    component: About,
});

// about layout




// profile route
const profileLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "profile",
  component: ProfileLayout,
});
const profileRoute = new Route({
  getParentRoute: () => profileLayout,
  path: "/",
  component: Profile,
});
const userRoute = new Route({
  getParentRoute: () => profileLayout,
  path: "$user",
  component: ProfileUser,
});
// profile route



// Create the route tree using your routes
const routeTree = rootLayout.addChildren([
  indexRoute,
  aboutLayout.addChildren([
    AboutRoute,
  ]),
  profileLayout.addChildren([
    profileRoute,
    userRoute,
  ]),
]);

// Create the router using your route tree

export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
