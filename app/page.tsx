import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Experience } from "@/components/experience";
import { Achievements } from "@/components/achievements";
import { Competencies } from "@/components/competencies";
import { Tools } from "@/components/tools";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { identity } from "@/content/portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  jobTitle: identity.title,
  email: `mailto:${identity.email}`,
  telephone: identity.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tehran",
    addressCountry: "IR",
  },
  knowsAbout: [
    "Project Control",
    "Procurement Management",
    "Operations Management",
    "Organizational Development",
    "Document Control",
    "Management Reporting",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <Experience />
        <Achievements />
        <Competencies />
        <Tools />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
