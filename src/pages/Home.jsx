import React from "react";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import BuildSequence from "@/components/home/BuildSequence";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Materials from "@/components/home/Materials";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import JournalPreview from "@/components/home/JournalPreview";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <ServicesShowcase />
      <BuildSequence />
      <ProcessTimeline />
      <Materials />
      <WhyUs />
      <Testimonials />
      <JournalPreview />
      <ContactSection />
    </>
  );
}