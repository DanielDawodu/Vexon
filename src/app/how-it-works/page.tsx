import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HowItWorks.module.css';

export const metadata: Metadata = {
    title: 'How It Works – Clearline Auto',
    description:
        'Learn how Clearline Auto provides sourcing and verification support through a structured process of dealer vetting, preliminary inspection, documentation checks, and secure handover.',
};

const steps = [
    {
        number: 1,
        title: 'You tell us your needs',
        description:
            'Submit your requirements, budget, and vehicle preferences.',
    },
    {
        number: 2,
        title: 'We source vehicles',
        description:
            'We connect with our network to find vehicles that match your specific criteria.',
    },
    {
        number: 3,
        title: 'We assist with verification',
        description:
            'We help facilitate preliminary checks on the vehicle\'s condition and documentation based on available information.',
    },
    {
        number: 4,
        title: 'You inspect and decide',
        description:
            'Physical inspection is recommended. You review the vehicle and make the final decision to proceed.',
    },
];

export default function HowItWorksPage() {
    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h1>How It Works</h1>
                    <p>
                        A clear, structured process that protects both buyers and dealers at
                        every stage.
                    </p>
                </div>

                {/* Hero image for this page */}
                <div className={styles.heroImage}>
                    <Image
                        src="/images/car-handover.png"
                        alt="Secure car handover process"
                        width={720}
                        height={400}
                        className={styles.heroImg}
                        priority
                    />
                </div>

                <div className={styles.timeline}>
                    {steps.map((step) => (
                        <div key={step.number} className={styles.step}>
                            <div className={styles.stepMarker}>{step.number}</div>
                            <div className={styles.stepContent}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.statement}>
                    <h2>Review Before You Commit</h2>
                    <p>
                        We encourage every buyer to physically inspect the sourced vehicle. Preliminary checks provide a baseline, but the final decision rests with you.
                    </p>
                </div>

                <div className={styles.cta}>
                    <Link href="/buyers" className="btn btn--primary btn--large">
                        Request Sourcing Support
                    </Link>
                </div>
            </div>
        </section>
    );
}
