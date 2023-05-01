import { Outlet, Link } from "@tanstack/router";

interface BoolLayoutProps {}

export function BoolLayout({}: BoolLayoutProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Outlet />
    </div>
  );
}