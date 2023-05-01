import { Link, Outlet } from "@tanstack/router";

interface RootRouteProps {

}

export function RootLayout({}:RootRouteProps){
return (
 <div className='w-full h-full flex items-center justify-center'>
        <div>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>
        <hr />
        <Outlet />
 </div>
);
}
