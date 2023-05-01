import { Outlet, Link } from "@tanstack/router";

interface ContactLayoutProps {}

export function ContactLayout({}: ContactLayoutProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Outlet />
    </div>
  );
}