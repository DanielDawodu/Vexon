import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>VEXON</h3>
                        <p>
                            Move Forward With Confidence. Verified car deals through
                            inspections, documentation checks, and transparent processes.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Navigation</h4>
                        <Link href="/">Home</Link>
                        <Link href="/how-it-works">How It Works</Link>
                        <Link href="/buyers">For Buyers</Link>
                        <Link href="/dealers">For Dealers</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className={styles.column}>
                        <h4>Get in Touch</h4>
                        <a
                            href="https://wa.me/2349113047990"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                        <a href="mailto:vexon005@gmail.com">vexon005@gmail.com</a>
                        <a href="tel:+2349113047990">+234 911 304 7990</a>
                        <a href="tel:+2349127627280">+234 912 762 7280</a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} VEXON. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
