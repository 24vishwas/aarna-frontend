import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { company, nav } from "@/content/site";
import { handleHashLink } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "@/components/site/MobileMenu";

export default function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setSolid(window.scrollY > window.innerHeight * 0.72);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[60] transition-[background-color,border-color,color,backdrop-filter] duration-700 ease-editorial",
          solid
            ? "border-b border-charcoal/10 bg-ivory/92 text-charcoal backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-charcoal/45 to-transparent text-ivory"
        )}
      >
        <div className="container-editorial flex items-center justify-between py-5 md:py-6">
          <Link to="/" className="group flex items-baseline gap-3" aria-label={`${company.name} — home`}>
            <span className="display text-[20px] leading-none tracking-[0.34em] md:text-[22px]">
              {company.wordmark}
            </span>
            <span className="hidden text-[9px] font-medium uppercase tracking-[0.3em] opacity-60 md:inline">
              Infrastructures
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleHashLink(e, item.href, navigate)}
                className="link-underline text-[11px] font-medium uppercase tracking-[0.24em] opacity-80 transition-opacity hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/#contact"
              onClick={(e) => handleHashLink(e, "/#contact", navigate)}
              className="hidden border border-current px-5 py-3 text-[10px] font-medium uppercase tracking-[0.24em] transition-colors duration-500 hover:border-bronze hover:bg-bronze hover:text-white md:inline-block"
            >
              Start a Project
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-2 transition-colors hover:text-bronze lg:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}