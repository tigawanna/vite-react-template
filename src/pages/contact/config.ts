import { rootLayout } from "@/router/router";
import { Route } from "@tanstack/router";
import { Contact } from "./Contact";
import { ContactLayout } from "./ContactLayout";

const ContactRouteLayout = new Route({
    getParentRoute: () => rootLayout,
    path: "/Contact",
    component: ContactLayout,
});


const ContactIndexRoute = new Route({
    getParentRoute: () => ContactRouteLayout,
    path: "/",
    component: Contact,
});



export const ContactRoute = ContactRouteLayout.addChildren([
    ContactIndexRoute,
])

