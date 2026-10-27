import React from "react";
import { Image } from "@/components/ui/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import RevealLines from "@/components/site/RevealLines";
import EnquiryForm from "@/components/site/EnquiryForm";
import { company } from "@/content/site";
import { IMAGES } from "@/lib/images";

const CONTACTS = [
  { icon: Phone, label: "Call the studio", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Start a chat", href: company.whatsapp, external: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.contactVilla}
          alt="Contemporary villa at night with warm interior light reflecting in a pool"
          loading="lazy"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
      </div>

      <div className="container-editorial relative py-24 md:py-36">
        <SectionLabel index="11" label="Enquiries" tone="light" />

        <div className="mt-10 grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <RevealLines
              lines={["Let's build", "something", "meaningful."]}
              className="text-[clamp(2.1rem,5.4vw,4.6rem)] text-ivory"
              lineClassName="display"
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-ivory/65">
                Tell us what you have in mind. We'll help you explore the possibilities.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-12 space-y-5">
              {CONTACTS.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-5 border-b border-ivory/15 pb-4 transition-colors duration-500 hover:border-bronze"
                >
                  <Icon className="h-4 w-4 text-bronze" strokeWidth={1.25} />
                  <span className="flex-1">
                    <span className="eyebrow block text-ivory/40">{label}</span>
                    <span className="mt-1 block text-base text-ivory transition-colors duration-500 group-hover:text-bronze">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-8 max-w-sm text-xs leading-relaxed text-ivory/40">
                Contact details shown are placeholders pending confirmation from the studio, and
                {company.city.replace(", India", "")} is our base for site visits.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}