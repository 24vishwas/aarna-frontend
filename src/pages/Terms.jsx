import React from "react";
import PageHero from "@/components/site/PageHero";

export default function Terms() {
  return (
    <>
      <PageHero
        index="Legal"
        label="Terms"
        title="Terms."
        intro="This is template terms text for the studio's website. It should be reviewed and replaced with the company's own terms before launch."
      />
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-editorial grid gap-10 md:grid-cols-12">
          <div className="space-y-7 md:col-span-7 md:col-start-5">
            <p className="text-base leading-relaxed text-charcoal/75">
              The images, drawings and written descriptions on this website are indicative. Project
              records currently shown are demonstration content, and are replaced as approved project
              photography and details become available.
            </p>
            <p className="text-base leading-relaxed text-charcoal/75">
              Nothing on this website constitutes a quotation, a contract, or a guarantee of cost,
              programme or outcome. Scope, specification, price and timeline are agreed in a written
              contract before any work begins.
            </p>
            <p className="text-base leading-relaxed text-charcoal/75">
              Enquiries submitted through this website are an invitation to discuss a project. They do
              not create a client relationship until both parties have signed an agreement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}