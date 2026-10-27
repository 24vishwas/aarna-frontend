import React from "react";
import PageHero from "@/components/site/PageHero";
import { company } from "@/content/site";

export default function Privacy() {
  return (
    <>
      <PageHero
        index="Legal"
        label="Privacy"
        title="Privacy."
        intro="This is template privacy text for the studio's website. It should be reviewed and replaced with the company's own policy before launch."
      />
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-editorial grid gap-10 md:grid-cols-12">
          <div className="space-y-7 md:col-span-7 md:col-start-5">
            <p className="text-base leading-relaxed text-charcoal/75">
              When you send an enquiry through this website, we store the details you provide — your
              name, phone number or email address, project type, location, indicative budget and your
              message — so that we can respond to your enquiry and discuss a possible project.
            </p>
            <p className="text-base leading-relaxed text-charcoal/75">
              We do not sell your information, and we do not use it for unrelated marketing. Enquiries
              are reviewed by the studio team only. If you would like your enquiry removed from our
              records, contact us at {company.email} and we will delete it.
            </p>
            <p className="text-base leading-relaxed text-charcoal/75">
              This website may use privacy-respecting analytics to understand which pages are useful.
              No advertising or third-party tracking pixels are used.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}