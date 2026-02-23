import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Trusted Car Brokerage</span>
            <h1 className={styles.heroTitle}>
              Verified Cars. Transparent Deals.
            </h1>
            <p className={styles.heroSubtext}>
              VEXON helps car buyers move forward with confidence through verified
              inspections and clear documentation. No guesswork. No surprises.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/buyers" className="btn btn--primary btn--large">
                Request a Verified Car
              </Link>
              <Link href="/dealers" className="btn btn--secondary btn--large">
                Partner With VEXON
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/hero-inspection.png"
              alt="Professional car inspection at VEXON"
              width={600}
              height={450}
              priority
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className={styles.pillars}>
        <div className={styles.pillarsInner}>
          <div className="section-header">
            <h2>Why VEXON</h2>
            <p>
              Every deal is built on a foundation of verification, clarity, and
              professional handling.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Verified Inspections</h3>
              <p>
                Every vehicle goes through a structured inspection process before
                any deal proceeds.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Clear Documentation</h3>
              <p>
                All paperwork is checked and verified to ensure a clean,
                transparent transaction.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Professional Handling</h3>
              <p>
                From first contact to handover, every step is managed with care
                and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview with Image */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <div className={styles.processGrid}>
            <div className={styles.processImage}>
              <Image
                src="/images/documentation-check.png"
                alt="Documentation verification process"
                width={520}
                height={390}
                className={styles.sectionImg}
              />
            </div>
            <div className={styles.processContent}>
              <h2>How We Work</h2>
              <p className={styles.processSubtext}>
                A structured process designed to protect both buyers and dealers at
                every stage.
              </p>
              <div className={styles.processSteps}>
                <div className={styles.processStep}>
                  <span className={styles.stepNumber}>1</span>
                  <div>
                    <h3>Submit Your Request</h3>
                    <p>Tell us what you are looking for and your budget range.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <span className={styles.stepNumber}>2</span>
                  <div>
                    <h3>Verification Process</h3>
                    <p>We inspect the vehicle and verify all documentation.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <span className={styles.stepNumber}>3</span>
                  <div>
                    <h3>Secure Handover</h3>
                    <p>Only after verification is complete does payment proceed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA with Image */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaImageWrap}>
            <Image
              src="/images/trust-handshake.png"
              alt="Trusted car deal handshake"
              width={1100}
              height={400}
              className={styles.ctaImage}
            />
            <div className={styles.ctaOverlay}>
              <h2>Ready to Move Forward?</h2>
              <p>
                Submit a verified car request or partner with VEXON as a dealer.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/buyers" className="btn btn--blue btn--large">
                  Request a Verified Car
                </Link>
                <Link href="/dealers" className="btn btn--secondary btn--large" style={{ borderColor: '#fff', color: '#fff' }}>
                  Become a Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
