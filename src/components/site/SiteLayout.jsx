import React from "react";
import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ScrollRail from "@/components/site/ScrollRail";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <SiteHeader />
      <ScrollRail />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}