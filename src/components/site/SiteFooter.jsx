import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { company, footerLinks, social } from "@/content/site";
import { handleHashLink } from "@/lib/navigation";
import Reveal from "@/components/site/Reveal";

function FooterLink({ item, navigate }) {
  return (
    <Link
      to={item.href}
      onClick={(e) => handleHashLink(e, item.href, navigate)}
      className="link-underline text-sm text-ivory/60 transition-colors hover:text-ivory"
    >
      {item.label}
    </Link>
  );
}

export default function SiteFooter() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-editorial py-16 md:py-24">
        <Reveal className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="display text-[26px] tracking-[0.34em]">{company.wordmark}</div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/55">
              {company.descriptor}
              <br />
              {company.city}
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <a href={company.phoneHref} className="flex items-center gap-3 text-ivory/70 hover:text-bronze">
                <Phone className="h-4 w-4" strokeWidth={1.25} /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-ivory/70 hover:text-bronze">
                <Mail className="h-4 w-4" strokeWidth={1.25} /> {company.email}
              </a>
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ivory/70 hover:text-bronze">
                <MessageCircle className="h-4 w-4" strokeWidth={1.25} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-ivory/40">Explore</p>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.explore.map((item) => (
                <FooterLink key={item.label} item={item} navigate={navigate} />
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-ivory/40">Services</p>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.services.map((item) => (
                <FooterLink key={item.label} item={item} navigate={navigate} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="hairline-inverse mt-16 flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ivory/60 hover:text-ivory"
              >
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.25} />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-ivory/45">
            {footerLinks.legal.map((item) => (
              <Link key={item.label} to={item.href} className="hover:text-ivory">
                {item.label}
              </Link>
            ))}
            <span>© {year} {company.name}</span>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ivory/35">
          Projects, journal articles and client feedback shown on this website are demonstration
          content, marked as such, until the studio supplies approved material. Contact details are
          placeholders pending confirmation.
        </p>
      </div>
    </footer>
  );
}