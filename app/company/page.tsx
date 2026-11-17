import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cottaway.com";

export const metadata: Metadata = {
  title: "About Cottaway Private Limited | IT Company in Kerala",
  description: "Learn about Cottaway Private Limited, an IT company in Kakkanad, Ernakulam, Kerala building practical software, web applications, and business systems.",
  alternates: { canonical: "/company" },
  openGraph: {
    title: "About Cottaway Private Limited | IT Company in Kerala",
    description: "Cottaway Private Limited builds practical digital products and business systems from Kakkanad, Kerala.",
    url: "/company",
  },
};

const companySchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/company#about`,
  url: `${siteUrl}/company`,
  name: "About Cottaway Private Limited",
  description: "About Cottaway Private Limited, an IT company based in Kakkanad, Ernakulam, Kerala.",
  mainEntity: {
    "@type": "Organization",
    name: "Cottaway Private Limited",
    url: `${siteUrl}/`,
    email: "contact@cottaway.com",
    telephone: "+91-97448-32367",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10/1744, 1st Floor, 1228, Sowbhagya Building, Athani",
      addressLocality: "Kakkanad, Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682030",
      addressCountry: "IN",
    },
  },
};

export default function CompanyPage() {
  return (
    <main className="seo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }} />
      <div className="seo-page-inner">
        <Link className="seo-back" href="/">← Cottaway home</Link>
        <p className="eyebrow"><span>ABOUT</span> COTTAWAY PRIVATE LIMITED</p>
        <h1>Practical technology for businesses that are going somewhere.</h1>
        <p className="seo-lead">Cottaway Private Limited is an IT company based in Kakkanad, Ernakulam, Kerala. We design and build dependable digital products, web applications, and business systems that make day-to-day work clearer.</p>
        <div className="seo-columns">
          <section><span className="seo-kicker">WHAT WE BELIEVE</span><h2>Software should feel like a competitive edge.</h2><p>Our work sits at the intersection of thoughtful design, solid engineering, and the real needs of the people using a system every day.</p></section>
          <section><span className="seo-kicker">OUR LOCATION</span><h2>Kakkanad, Kerala</h2><p>10/1744, 1st Floor, 1228, Sowbhagya Building, Athani, Kakkanad, Ernakulam — 682030, Kerala.</p><a className="seo-contact" href="mailto:contact@cottaway.com">contact@cottaway.com ↗</a><a className="seo-contact" href="tel:+919744832367">+91 97448 32367 ↗</a></section>
        </div>
        <Link className="button button-lime" href="/#contact">Start a conversation <span>↗</span></Link>
      </div>
    </main>
  );
}
