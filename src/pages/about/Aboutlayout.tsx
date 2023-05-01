import { Outlet,Link } from "@tanstack/router";


interface AboutlayoutProps {

}

export function Aboutlayout({}:AboutlayoutProps){
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
