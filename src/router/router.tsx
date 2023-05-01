import App from "../App";
import { Router,RootRoute,} from "@tanstack/router";
import { profileRoute } from "@/pages/profile/config";
import { aboutRoute } from "@/pages/about/config";
import { indexRoute } from "@/pages/root/config";

// Create a root route
export const rootLayout = new RootRoute({
  component: App,
});


// Create the route tree using your routes
const routeTree = rootLayout.addChildren([
  indexRoute,
  aboutRoute,
  profileRoute,
]);

// Create the router using your route tree

export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
