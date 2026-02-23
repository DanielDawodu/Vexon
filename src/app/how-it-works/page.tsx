import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HowItWorks.module.css';

export const metadata: Metadata = {
    title: 'How It Works – VEXON',
    description:
        'Learn how VEXON facilitates verified car deals through a structured process of dealer vetting, vehicle inspection, documentation checks, and secure handover.',
};

const steps = [
    {
        number: 1,
        title: 'Dealer Vetting',
        description:
            'We screen and verify dealers before they can list through VEXON, ensuring only credible sellers participate.',
    },
    {
        number: 2,
        title: 'Car Inspection & Verification',
        description:
            'Each vehicle undergoes a thorough inspection process to assess its condition, history, and authenticity.',
    },
    {
        number: 3,
        title: 'Documentation Check',
        description:
            'All vehicle documents are verified for accuracy, ownership status, and compliance with regulations.',
    },
    {
        number: 4,
        title: 'Buyer Qualification',
        description:
            'We understand the buyer\'s requirements and budget to match them with verified vehicles that fit their criteria.',
    },
    {
        number: 5,
        title: 'Viewing & Inspection',
        description:
            'Buyers are invited to view and inspect the vehicle in person before making any commitment.',
    },
    {
        number: 6,
        title: 'Payment & Handover',
        description:
            'Once all parties are satisfied, payment is processed and the vehicle is handed over with complete documentation.',
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
                    <h2>No inspection. No payment.</h2>
                    <p>
                        Every deal through VEXON begins with verification. If a vehicle does
                        not pass inspection, the transaction does not proceed.
                    </p>
                </div>

                <div className={styles.cta}>
                    <Link href="/buyers" className="btn btn--primary btn--large">
                        Start a Verified Request
                    </Link>
                </div>
            </div>
        </section>
    );
}
