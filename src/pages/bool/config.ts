import { rootLayout } from "@/router/router";
import { Route } from "@tanstack/router";
import { Bool } from "./Bool";
import { BoolLayout } from "./BoolLayout";

//Bool route layout
const BoolRouteLayout = new Route({
    getParentRoute: () => rootLayout,
    path: "/Bool",
    component: BoolLayout,
});

//Bool default route
const BoolIndexRoute = new Route({
    getParentRoute: () => BoolRouteLayout,
    path: "/",
    component: Bool,
});


export const boolRoute = BoolRouteLayout.addChildren([
    BoolIndexRoute,
])

