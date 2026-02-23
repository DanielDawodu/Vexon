import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './About.module.css';

export const metadata: Metadata = {
    title: 'About – VEXON',
    description:
        'Learn about VEXON, a professional car brokerage built on trust, transparency, and verified processes.',
};

export default function AboutPage() {
    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h1>About VEXON</h1>
                    <p>
                        A professional car brokerage built on the belief that buying a
                        car should be straightforward, transparent, and stress-free.
                    </p>
                </div>

                {/* Hero image */}
                <div className={styles.heroImage}>
                    <Image
                        src="/images/trust-handshake.png"
                        alt="Trust and transparency at VEXON"
                        width={780}
                        height={420}
                        className={styles.heroImg}
                        priority
                    />
                </div>

                <div className={styles.content}>
                    <h2>Why VEXON Exists</h2>
                    <p>
                        The car buying process in many markets is still opaque. Buyers face
                        uncertainty about vehicle condition, documentation validity, and
                        pricing fairness. Dealers struggle with time-wasters and
                        unqualified leads.
                    </p>
                    <p>
                        VEXON was created to bridge this gap. By introducing a structured
                        verification process, we ensure that every deal is built on a
                        foundation of trust. We do not own inventory and we do not sell cars
                        directly. Instead, we facilitate verified transactions between
                        screened dealers and qualified buyers.
                    </p>

                    <h2>How We Think About Trust</h2>
                    <p>
                        Trust is not a marketing strategy. It is the result of consistent,
                        transparent actions. Every inspection report, every documentation
                        check, and every interaction through VEXON is designed to lower risk
                        and increase confidence for both parties.
                    </p>

                    <div className={styles.values}>
                        <div className={styles.valueCard}>
                            <h3>Transparency</h3>
                            <p>
                                Every step of the process is visible and documented. No hidden
                                fees, no undisclosed issues.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Verification</h3>
                            <p>
                                Nothing proceeds without proper inspection and documentation
                                checks.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Professionalism</h3>
                            <p>
                                From first contact to handover, every interaction is handled
                                with care and accountability.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>Simplicity</h3>
                            <p>
                                A clear, structured process that removes confusion and reduces
                                friction.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team section with photo */}
                <div className={styles.founders}>
                    <div className={styles.foundersGrid}>
                        <div className={styles.foundersImage}>
                            <Image
                                src="/images/team-photo.png"
                                alt="The VEXON team"
                                width={400}
                                height={300}
                                className={styles.teamImg}
                            />
                        </div>
                        <div className={styles.foundersContent}>
                            <h2>The Team</h2>
                            <p>
                                VEXON is run by a small team of individuals who have seen the
                                challenges of car buying firsthand. Our background spans automotive
                                services, technology, and customer operations. We are committed to
                                building a better way to buy and sell cars, one verified deal at a
                                time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
