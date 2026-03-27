import type { Metadata } from 'next';
import styles from '../buyers/Buyers.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy | Clearline Automotive Concepts',
    description: 'Privacy policy for Clearline Automotive Concepts. We protect your data and use it only for sourcing and verification support.',
};

export default function PrivacyPage() {
    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                <div style={{ marginBottom: '3rem' }}>
                    <h1>Privacy Policy</h1>
                    <p style={{ opacity: 0.7 }}>Last Updated: March 2026</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.7' }}>
                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us through our forms, including:
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li>Name and contact information</li>
                            <li>Vehicle preferences and budget requirements</li>
                            <li>Dealership details for partners</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                        <p>
                            Your data is used exclusively to:
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li>Facilitate vehicle sourcing matching.</li>
                            <li>Contact you regarding verification support.</li>
                            <li>Improve our service delivery.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>3. Data Sharing</h2>
                        <p>
                            We share specific vehicle requirements with our network of screened dealers to find matches. 
                            We do not sell your personal data to third-party marketers.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>4. Security</h2>
                        <p>
                            We implement standard security measures to protect your information from unauthorized access. 
                            However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>5. Your Rights</h2>
                        <p>
                            You have the right to request access to or deletion of your personal data at any time by contacting us.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>6. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please email us at hello@clearlineauto.com.ng.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}
