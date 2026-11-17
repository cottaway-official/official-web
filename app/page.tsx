import SiteInteractions from "./site-interactions";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cottaway.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Cottaway Private Limited",
      url: `${siteUrl}/`,
      email: "contact@cottaway.com",
      telephone: "+91-97448-32367",
      logo: `${siteUrl}/icon.svg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "10/1744, 1st Floor, 1228, Sowbhagya Building, Athani",
        addressLocality: "Kakkanad, Ernakulam",
        addressRegion: "Kerala",
        postalCode: "682030",
        addressCountry: "IN",
      },
      sameAs: ["https://gymatrix.in/"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Cottaway Private Limited",
      url: `${siteUrl}/`,
      email: "contact@cottaway.com",
      telephone: "+91-97448-32367",
      priceRange: "$$",
      serviceType: ["Software development", "IT services", "Business systems"],
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "10/1744, 1st Floor, 1228, Sowbhagya Building, Athani",
        addressLocality: "Kakkanad, Ernakulam",
        addressRegion: "Kerala",
        postalCode: "682030",
        addressCountry: "IN",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#gymatrix`,
      name: "Gymatrix",
      url: "https://gymatrix.in/",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Gym management software",
      operatingSystem: "Web",
      description: "Gym management software for memberships, payments, attendance, trainers, and daily gym operations.",
      creator: { "@id": `${siteUrl}/#organization` },
      offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Cottaway Private Limited",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

function Brand() {
  return (
    <span className="brand-copy">
      <strong>COTTAWAY</strong>
      <small>PRIVATE LIMITED</small>
    </span>
  );
}

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

export default function HomePage() {
  return (
    <div className="site-shell">
      <SiteInteractions />
      <div className="topline">
        <span><i className="status-dot" /> COTTAWAY PRIVATE LIMITED</span>
        <span className="topline-right">EST. 2026 <span className="slash">/</span> KERALA, INDIA</span>
      </div>

      <header className="nav-wrap" id="top">
        <a className="brand" href="#top" aria-label="Cottaway home"><BrandMark /><Brand /></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">What we build</a>
          <a href="#gymatrix">Gymatrix</a>
          <a href="#company">Company</a>
        </nav>
        <a className="button button-small button-outline" href="#contact">Start a conversation <span>↗</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false"><span /><span /></button>
      </header>

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span>01</span> DIGITAL PRODUCTS / SYSTEMS</p>
            <h1 id="hero-title">Technology that keeps <em>businesses</em> moving.</h1>
            <p className="hero-intro">We build clear, dependable software for the people doing the real work — from growing teams to thriving gyms.</p>
            <div className="hero-actions"><a className="button button-lime" href="#gymatrix">Explore Gymatrix <span>↗</span></a><a className="text-link" href="#contact">Talk to our team <span>→</span></a></div>
            <div className="hero-contact" aria-label="Cottaway contact details">
              <span className="hero-contact-label">LET&apos;S BUILD SOMETHING USEFUL</span>
              <a href="tel:+919744832367">+91 97448 32367</a>
              <a href="mailto:contact@cottaway.com">contact@cottaway.com</a>
            </div>
          </div>
          <div className="hero-art reveal delay-1" aria-label="Cottaway builds software for gyms and growing businesses">
            <div className="hero-image" aria-hidden="true" /><div className="image-wash" aria-hidden="true" />
            <div className="hero-art-label label-top">PEOPLE × PRODUCT × PROGRESS</div><div className="hero-art-label label-bottom">BUILDING FROM KAKKANAD <span>↗</span></div>
            <div className="floating-card card-top"><span className="card-kicker">NOW BUILDING</span><strong>Gymatrix</strong><span className="card-arrow">↗</span></div>
            <div className="floating-card card-bottom"><span className="mini-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></span><span><small>ACTIVE MEMBERS</small><strong>2,840 <b>+18.4%</b></strong></span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Cottaway capabilities"><div className="ticker-track"><span>SOFTWARE WITH INTENT</span><b>✦</b><span>BUILT FOR MOMENTUM</span><b>✦</b><span>SOFTWARE WITH INTENT</span><b>✦</b><span>BUILT FOR MOMENTUM</span></div></section>

        <section className="intro section-pad" id="company" aria-labelledby="approach-title">
          <div className="section-meta reveal"><span>02</span><span>THE COTTAWAY APPROACH</span><span>↑ SCROLL TO DISCOVER</span></div>
          <div className="intro-grid"><h2 className="reveal" id="approach-title">Good software should feel like a <em>competitive edge.</em></h2><div className="intro-body reveal delay-1"><p>Cottaway is an IT company focused on practical digital products. We turn complex operations into simple, confident experiences that help businesses move faster.</p><a className="text-link text-link-dark" href="#work">See what we build <span>→</span></a></div></div>
        </section>

        <section className="product-section" id="gymatrix" aria-labelledby="gymatrix-title">
          <div className="product-image product-image-one" role="img" aria-label="Athlete training in a modern gym" />
          <div className="product-content section-pad">
            <div className="section-meta meta-dark"><span>03</span><span>OUR MAIN PRODUCT</span><span>GYM MANAGEMENT / SAAS</span></div>
            <div className="product-grid"><div className="product-title reveal"><span className="product-number">01</span><h2 id="gymatrix-title">Run your gym like a <em>business.</em></h2></div><div className="product-description reveal delay-1"><p>Gymatrix brings memberships, payments, attendance, trainers, and day-to-day operations into one calm, powerful workspace.</p><a className="button button-dark" href="https://gymatrix.in" target="_blank" rel="noreferrer">Visit gymatrix.in <span>↗</span></a></div></div>
            <div className="dashboard-frame reveal delay-2" aria-label="Gymatrix dashboard preview">
              <div className="dashboard-top"><div className="dash-brand"><span className="dash-logo">G</span> gymatrix</div><div className="dash-date">Monday, 17 November 2026 <span className="dash-avatar">A</span></div></div>
              <div className="dashboard-body"><aside className="dash-sidebar"><span className="side-active">Overview</span><span>Members</span><span>Payments</span><span>Trainers</span><span>Reports</span><span>Settings</span></aside><div className="dash-main"><div className="dash-heading"><span><small>GOOD MORNING, ARJUN</small><strong>Here’s your gym at a glance.</strong></span><button>+ Add member</button></div><div className="stat-row"><div><small>ACTIVE MEMBERS</small><strong>2,840</strong><b>+18.4%</b></div><div><small>MONTHLY REVENUE</small><strong>₹ 8.42L</strong><b>+12.6%</b></div><div><small>CHECK-INS TODAY</small><strong>186</strong><b>+8.2%</b></div></div><div className="dash-lower"><div className="chart-panel"><div className="panel-head"><strong>Member growth</strong><span>Last 6 months⌄</span></div><div className="chart"><div className="chart-grid" /><svg viewBox="0 0 520 160" role="img" aria-label="Member growth chart"><path d="M0 140 C55 135 68 118 110 123 S170 90 210 103 S268 75 304 82 S358 56 390 62 S452 18 520 24" fill="none" stroke="#b8e86a" strokeWidth="4" /><path d="M0 140 C55 135 68 118 110 123 S170 90 210 103 S268 75 304 82 S358 56 390 62 S452 18 520 24 V160 H0Z" fill="url(#chartFill)" opacity=".22" /><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#b8e86a" /><stop offset="1" stopColor="#b8e86a" stopOpacity="0" /></linearGradient></defs></svg></div><div className="chart-labels"><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span></div></div><div className="activity-panel"><div className="panel-head"><strong>Recent activity</strong><span>View all →</span></div><div className="activity"><i className="activity-avatar">S</i><span><b>Sarah Thomas</b> renewed membership<small>2 min ago</small></span></div><div className="activity"><i className="activity-avatar orange">M</i><span><b>Mike Joseph</b> checked in<small>8 min ago</small></span></div><div className="activity"><i className="activity-avatar blue">A</i><span><b>Anjali Menon</b> joined a class<small>14 min ago</small></span></div></div></div></div></div>
            </div>
          </div>
        </section>

        <section className="feature-section" id="work" aria-labelledby="features-title">
          <div className="feature-image" role="img" aria-label="People working out in a gym" />
          <div className="feature-content section-pad"><div className="section-meta"><span>04</span><span>WHY GYMATRIX</span><span>MADE FOR MOMENTUM</span></div><h2 className="reveal" id="features-title">Everything you need.<br /><em>Nothing in the way.</em></h2><div className="feature-list"><article className="feature-item reveal"><span>01</span><div><h3>One clear view</h3><p>See members, revenue, retention, and daily activity without digging through spreadsheets.</p></div><span className="item-plus">+</span></article><article className="feature-item reveal"><span>02</span><div><h3>Built for your team</h3><p>Simple enough for the front desk. Powerful enough for the owner.</p></div><span className="item-plus">+</span></article><article className="feature-item reveal"><span>03</span><div><h3>Ready to grow</h3><p>Automate the repeatable, so your people can focus on the relationships that matter.</p></div><span className="item-plus">+</span></article></div></div>
        </section>

        <section className="services section-pad" aria-labelledby="services-title"><div className="section-meta"><span>05</span><span>WHAT WE DO</span><span>CAPABILITIES</span></div><div className="services-heading"><h2 className="reveal" id="services-title">We make the digital side of business <em>feel simple.</em></h2><p className="reveal delay-1">From a focused product to a tailored system, we combine thoughtful design and dependable technology.</p></div><div className="service-grid"><article className="service-card reveal"><span className="service-icon">↗</span><small>01 / PRODUCT</small><h3>Digital products</h3><p>Software that earns its place in your everyday workflow.</p><a href="#contact">Explore <span>↗</span></a></article><article className="service-card service-card-lime reveal delay-1"><span className="service-icon">✦</span><small>02 / ENGINEERING</small><h3>Web &amp; app development</h3><p>Fast, focused digital experiences built to last.</p><a href="#contact">Explore <span>↗</span></a></article><article className="service-card reveal delay-2"><span className="service-icon">⊙</span><small>03 / SYSTEMS</small><h3>Business systems</h3><p>Connected tools that give your team room to do better work.</p><a href="#contact">Explore <span>↗</span></a></article></div></section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title"><div className="contact-orbit orbit-one" aria-hidden="true" /><div className="contact-orbit orbit-two" aria-hidden="true" /><div className="section-meta contact-meta"><span>06</span><span>START SOMETHING USEFUL</span><span>CONTACT</span></div><div className="contact-grid"><h2 className="reveal" id="contact-title">Have a problem worth <em>solving?</em></h2><div className="contact-copy reveal delay-1"><p>Tell us where you want to go. We’ll help you find the clearest way to get there.</p><a className="button button-dark" href="mailto:contact@cottaway.com">contact@cottaway.com <span>↗</span></a></div></div><div className="contact-details"><a href="tel:+919744832367"><small>CALL US</small><strong>+91 97448 32367</strong></a><span className="contact-divider" /><address><small>VISIT US</small><strong>10/1744, 1st Floor, 1228<br />Sowbhagya Building, Athani<br />Kakkanad, Ernakulam — 682030, Kerala</strong></address></div></section>
      </main>

      <footer className="footer section-pad"><a className="brand" href="#top"><BrandMark /><Brand /></a><p>Software with intent.<br />Built in Kerala, India.</p><div className="footer-links"><a href="https://gymatrix.in" target="_blank" rel="noreferrer">gymatrix.in ↗</a><a href="mailto:contact@cottaway.com">contact@cottaway.com</a><span>© 2026 Cottaway</span></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </div>
  );
}
