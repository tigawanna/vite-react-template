import App from '../App'
import { AboutIndex } from '../pages/about/AboutIndex'
import { IndexRoute } from '../pages/root/Index'
import { RootLayout } from '../pages/root/RootRoute'
import {
    Outlet,
    RouterProvider,
    Link,
    Router,
    Route,
    RootRoute,
} from '@tanstack/router'

// Create a root route
const rootRoute = new RootRoute({
    component:App,
})



// Create an index route
const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: IndexRoute,
})



const aboutRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: AboutIndex,
})


// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// Create the router using your route tree

export const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/router' {
    interface Register {
        router: typeof router
    }
}
