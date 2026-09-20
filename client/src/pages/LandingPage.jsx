import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CertificateLookupModal from "../components/CertificateLookupModal";
import { certificateApi } from "../api/certificateApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitLookup = async ({ fullName, email }) => {
    setLoading(true);
    try {
      const { data } = await certificateApi.findByNameEmail({ fullName, email });
      navigate(`/certificates?name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}`, {
        state: {
          prefetched: {
            name: fullName,
            email,
            intern: data.intern || null,
            certificates: data.certificates || []
          }
        }
      });
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        message: error?.response?.data?.message || "No certificates found for this name and email."
      };
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="editorial-wrapper">
      {/* Background ambient lighting */}
      <div className="editorial-ambient-glow"></div>

      <div className="editorial-container">
        {/* Navigation Bar */}
        <header className="editorial-nav">
          <div className="nav-brand">
            <img src="/black.png" alt="Uplern" className="editorial-logo" />
            <span className="brand-dot-plus">+</span>
          </div>


          <div className="nav-actions">
            <button type="button" className="btn-editorial-pill" onClick={() => setOpen(true)}>
              <span className="pill-icon-ticket">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path><path d="M13 5v2"></path><path d="M13 11v2"></path><path d="M13 17v2"></path></svg>
              </span>
              <span>GET CERTIFICATE</span>
            </button>

          </div>

        </header>

        {/* Hero Section */}
        <main className="editorial-main">
          {/* Vertical Pill Tag */}
          <div className="editorial-side-tag">
            <div className="side-tag-capsule">
              <span className="capsule-dot"></span>
              <span className="capsule-text">SEARCH & VERIFY</span>
            </div>
          </div>

          {/* Center Heading Content */}
          <div className="editorial-hero-text">
            <h1 className="hero-giant-title">
              Verify <br />
              The Best <br />
              <span className="title-highlight">Credentials.</span>
            </h1>

            <p className="hero-editorial-sub">
              Tamper-proof certificate archive & verification platform that guarantees 
              authentic internship & performance records worldwide.
            </p>

            <div className="editorial-action-row">
              <button type="button" className="btn-editorial-hero" onClick={() => setOpen(true)}>
                <span className="play-triangle">▲</span>
                <span>LOOKUP CERTIFICATE</span>
              </button>
            </div>

            <div className="editorial-date-range">
              <span className="date-main">2024 — 2026</span>
              <span className="date-line"></span>
              <span className="date-sub">UPLERN OFFICIAL VAULT</span>
            </div>
          </div>

          {/* Right Side Visual Graphic Area */}
          <div className="editorial-visual-container">
            {/* Glowing Orange Oval Canvas */}
            <div className="orange-ellipse-canvas">
              <div className="ellipse-inner-glow"></div>
            </div>

            {/* Geometry Grid Accent Lines */}
            <div className="wireframe-accent-grid">
              <svg width="220" height="220" viewBox="0 0 200 200" fill="none" opacity="0.35">
                <path d="M100 0 C 120 80, 180 90, 200 100 C 120 110, 110 180, 100 200 C 90 120, 20 110, 0 100 C 80 90, 90 20, 100 0 Z" stroke="#000000" strokeWidth="1" fill="none" />
                <path d="M100 20 C 115 80, 165 88, 180 100 C 115 110, 108 165, 100 180 C 88 115, 35 108, 20 100 C 80 88, 88 35, 100 20 Z" stroke="#000000" strokeWidth="0.75" fill="none" />
              </svg>
            </div>

            {/* Circular Rotated Typography Badge around Oval */}
            <div className="rotated-text-ring">
              OFFICIAL UPLERN INTERNSHIP &amp; PERFORMANCE CERTIFICATION SYSTEM — CRYPTOGRAPHICALLY SIGNED
            </div>

            {/* Overlapping High-Contrast Ticket / Certificate Card */}
            <div className="editorial-cert-ticket animate-ticket-float">
              <div className="ticket-left-strip">
                <div className="strip-sunburst">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                </div>
                <span className="strip-vertical-text">UPLERN VERIFIED</span>
              </div>

              <div className="ticket-main-content">
                <div className="ticket-top-header">
                  <span className="ticket-title-bold">EXCELLENCE</span>
                  <span className="ticket-sub-label">CERTIFICATE OF ISSUANCE</span>
                </div>

                <div className="ticket-body-details">
                  <span className="ticket-year">2026 EDITION</span>
                  <div className="ticket-recipient-block">
                    <span className="rec-lbl">AUTHENTICATED RECORD</span>
                    <h3 className="rec-name">Uplern Fellow</h3>
                  </div>
                </div>

                <div className="ticket-barcode-area">
                  <div className="barcode-lines">
                    <span className="b-line w-2"></span>
                    <span className="b-line w-1"></span>
                    <span className="b-line w-3"></span>
                    <span className="b-line w-1"></span>
                    <span className="b-line w-4"></span>
                    <span className="b-line w-2"></span>
                    <span className="b-line w-1"></span>
                    <span className="b-line w-3"></span>
                    <span className="b-line w-2"></span>
                    <span className="b-line w-4"></span>
                    <span className="b-line w-1"></span>
                  </div>
                  <span className="barcode-num">UPL-9824-2026</span>
                </div>
              </div>
            </div>

          </div>
        </main>

        {/* Global Accreditation & Storytelling Partnership Section */}
        <section className="accreditation-section">
          <div className="accreditation-header">
            <span className="acc-tag-badge">GLOBAL ACCEPTABILITY &amp; PARTNERSHIPS</span>
            <h2 className="acc-title">Backed by Internationally Recognized Accreditation Authorities</h2>
            <p className="acc-subtitle">Every certificate issued through Uplern carries global weight, audited quality standards, and official partner endorsements recognized across multinational corporations.</p>
          </div>

          <div className="accreditation-stories-grid">
            {/* ISO Story Card */}
            <div className="story-card iso-story-card">
              <div className="story-card-top">
                <div className="iso-gold-emblem">
                  <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="46" fill="#D4AF37" stroke="#997A15" strokeWidth="3"/>
                    <circle cx="50" cy="50" r="38" fill="#FFFDF0" stroke="#D4AF37" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="32" fill="none" stroke="#111" strokeWidth="1.5"/>
                    <path d="M50 20 L53 26 L60 26 L55 30 L57 36 L50 32 L43 36 L45 30 L40 26 L47 26 Z" fill="#D4AF37"/>
                    <text x="50" y="56" textAnchor="middle" fontSize="18" fontWeight="900" fill="#111" fontFamily="Outfit">ISO</text>
                    <text x="50" y="68" textAnchor="middle" fontSize="7" fontWeight="800" fill="#666" letterSpacing="1">9001:2015</text>
                    <path d="M50 78 L53 84 L60 84 L55 88 L57 94 L50 90 L43 94 L45 88 L40 84 L47 84 Z" fill="#D4AF37"/>
                  </svg>
                </div>
                <span className="story-badge">QUALITY AUDITED</span>
              </div>
              
              <div className="story-card-body">
                <h3 className="story-headline">ISO 9001:2015 Certified Standards</h3>
                <p className="story-paragraph">
                  Uplern’s assessment and credential issuance process is certified under ISO 9001:2015 International Quality Management. This guarantees that every internship project, evaluation criteria, and award follows audited, world-class educational benchmarks.
                </p>
                <div className="story-footer-meta">
                  <span className="meta-pill">International Quality Benchmark</span>
                  <span className="meta-pill">Audited Compliance</span>
                </div>
              </div>
            </div>

            {/* OTHM Qualifications Story Card */}
            <div className="story-card othm-story-card">
              <div className="story-card-top">
                <div className="othm-logo-vector">
                  <span className="othm-brand-text">othm<sup>®</sup></span>
                  <span className="othm-qual-text">qualifications <span className="squares-group"><span></span><span></span><span></span><span></span></span></span>
                </div>
                <span className="story-badge othm-tag">UK REGULATED</span>
              </div>

              <div className="story-card-body">
                <h3 className="story-headline">OTHM Endorsed Higher Pathways</h3>
                <p className="story-paragraph">
                  In collaboration with UK Awarding Body OTHM Qualifications, our curriculum and internship modules align with Ofqual regulated frameworks. Certificate holders receive academic & professional recognition accepted across UK & Commonwealth institutions.
                </p>
                <div className="story-footer-meta">
                  <span className="meta-pill">UK Ofqual Framework</span>
                  <span className="meta-pill">Global University Transferability</span>
                </div>
              </div>
            </div>

            {/* Skillsoft Partnership Story Card */}
            <div className="story-card skillsoft-story-card">
              <div className="story-card-top">
                <div className="skillsoft-logo-vector">
                  <span className="skillsoft-text">skillsoft</span>
                  <span className="skillsoft-dots">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff5500">
                      <polygon points="12,2 22,12 12,22"></polygon>
                      <polygon points="4,7 12,12 4,17" opacity="0.6"></polygon>
                    </svg>
                  </span>
                </div>
                <span className="story-badge skillsoft-tag">ENTERPRISE READY</span>
              </div>

              <div className="story-card-body">
                <h3 className="story-headline">Skillsoft Corporate Learning Integration</h3>
                <p className="story-paragraph">
                  Partnered with global corporate learning leader Skillsoft, our internship certificates validate practical tech and leadership skills designed for Fortune 500 hiring. Candidates are verified against enterprise skill taxonomies.
                </p>
                <div className="story-footer-meta">
                  <span className="meta-pill">Fortune 500 Skill Taxonomy</span>
                  <span className="meta-pill">Corporate Ready</span>
                </div>
              </div>
            </div>

            {/* Cryptographic Ledger Story Card */}
            <div className="story-card ledger-story-card">
              <div className="story-card-top">
                <div className="seal-check-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <span className="story-badge ledger-tag">TAMPER PROOF</span>
              </div>

              <div className="story-card-body">
                <h3 className="story-headline">Cryptographic Public Ledger Verification</h3>
                <p className="story-paragraph">
                  Every Uplern credential generates a unique SHA-256 cryptographic hash recorded on our public ledger. Employers & background check agencies can verify recipient identity instantly with zero forgery risk.
                </p>
                <div className="story-footer-meta">
                  <span className="meta-pill">SHA-256 Hash Signed</span>
                  <span className="meta-pill">Instant Background Clearance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Footer */}
        <footer className="editorial-footer">
          <p>© {new Date().getFullYear()} Uplern Organization · Globally Accredited Verification Vault · Cryptographically Signed</p>
        </footer>
      </div>

      <CertificateLookupModal open={open} onClose={() => setOpen(false)} onSubmit={submitLookup} loading={loading} />
    </div>
  );
};

export default LandingPage;
