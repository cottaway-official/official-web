import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cottaway.com";

export const metadata: Metadata = {
  title: "Gymatrix Gym Management Software | Cottaway",
  description: "Gymatrix is modern gym management software for memberships, payments, attendance, trainers, reporting, and fitness business operations.",
  keywords: ["Gymatrix", "gym management software", "gym software India", "fitness business software", "gym membership management"],
  alternates: { canonical: "/gymatrix" },
  openGraph: {
    title: "Gymatrix Gym Management Software | Cottaway",
    description: "Run your gym like a business with Gymatrix, the calm and powerful gym management platform from Cottaway.",
    url: "/gymatrix",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/gymatrix#software`,
  name: "Gymatrix",
  url: "https://gymatrix.in/",
  description: "Gym management software for memberships, payments, attendance, trainers, reporting, and daily gym operations.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Gym management software",
  operatingSystem: "Web",
  creator: { "@type": "Organization", name: "Cottaway Private Limited", url: `${siteUrl}/` },
  featureList: ["Member management", "Gym attendance tracking", "Membership payments", "Trainer management", "Business reports"],
};

export default function GymatrixPage() {
  return (
    <main className="seo-page seo-product-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className="seo-page-inner">
        <Link className="seo-back" href="/">← Cottaway home</Link>
        <p className="eyebrow"><span>MAIN PRODUCT</span> GYM MANAGEMENT SOFTWARE</p>
        <h1>Run your gym like a business.</h1>
        <p className="seo-lead">Gymatrix is modern gym management software from Cottaway Private Limited. It brings memberships, payments, attendance, trainers, and daily gym operations into one clear workspace.</p>
        <div className="product-seo-grid"><div><span className="seo-kicker">BUILT FOR FITNESS BUSINESSES</span><h2>Everything your team needs. Nothing in the way.</h2></div><div><p>Gymatrix helps gym owners and front-desk teams spend less time on spreadsheets and more time building member relationships.</p><ul><li>Manage members and memberships</li><li>Track check-ins and attendance</li><li>Monitor payments and revenue</li><li>Organize trainers and classes</li><li>Understand performance with reports</li></ul></div></div>
        <div className="seo-actions"><a className="button button-lime" href="https://gymatrix.in" target="_blank" rel="noreferrer">Visit gymatrix.in <span>↗</span></a><Link className="text-link" href="/#contact">Talk to Cottaway <span>→</span></Link></div>
      </div>
    </main>
  );
}
