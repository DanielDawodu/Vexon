import type { Metadata } from 'next';
import styles from '../buyers/Buyers.module.css';

export const metadata: Metadata = {
    title: 'Terms of Service | Clearline Automotive Concepts',
    description: 'Terms and conditions for using vehicle sourcing and verification support services from Clearline Automotive Concepts.',
};

export default function TermsPage() {
    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                <div style={{ marginBottom: '3rem' }}>
                    <h1>Terms of Service</h1>
                    <p style={{ opacity: 0.7 }}>Last Updated: March 2026</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.7' }}>
                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>1. Services Overview</h2>
                        <p>
                            Clearline Automotive Concepts ("Clearline", "we", "us", or "our") provides vehicle sourcing and verification support services. 
                            We act as a facilitator and support company connecting buyers with potential vehicles and assisting with preliminary checks.
                        </p>
                        <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                            We do NOT sell vehicles directly, we do NOT own inventory, and we are NOT a final authority on vehicle condition.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>2. Verification Support Disclaimer</h2>
                        <p>
                            Any verification or inspection support provided by Clearline is based on available information provided by suppliers and a preliminary visual assessment. 
                            Cleanline does not guarantee the "perfect condition," "accident-free" status, or long-term reliability of any vehicle.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>3. Buyer Responsibility</h2>
                        <p>
                            The final decision to purchase any vehicle rests solely with the buyer. We strongly encourage every buyer to physically inspect 
                            the vehicle and conduct independent verification before committing to any payment or contract.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>4. Limitation of Liability</h2>
                        <p>
                            Clearline Automotive Concepts shall not be held liable for any mechanical failures, hidden defects, documentation issues, 
                            or financial losses resulting from transactions facilitated through our platform.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>5. Partner Dealers</h2>
                        <p>
                            Dealers operating through our platform are independent entities. While we perform preliminary vetting, 
                            Clearline is not responsible for the conduct or claims made by third-party sellers.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>6. Contact</h2>
                        <p>
                            For any questions regarding these terms, please contact us at hello@clearlineauto.com.ng.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}
