import { rootLayout } from "@/router/router";
import { Route } from "@tanstack/router";
import { Contact } from "./Contact";
import { ContactLayout } from "./ContactLayout";

//Contact route layout
const ContactRouteLayout = new Route({
    getParentRoute: () => rootLayout,
    path: "/Contact",
    component: ContactLayout,
});

//Contact default route
const ContactIndexRoute = new Route({
    getParentRoute: () => ContactRouteLayout,
    path: "/",
    component: Contact,
});


export const contactRoute = ContactRouteLayout.addChildren([
    ContactIndexRoute,
])

