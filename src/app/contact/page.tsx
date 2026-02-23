import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './Contact.module.css';

export const metadata: Metadata = {
    title: 'Contact – VEXON',
    description:
        'Get in touch with VEXON. Reach out via WhatsApp, email, or phone for verified car deals.',
};

export default function ContactPage() {
    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h1>Contact Us</h1>
                    <p>
                        Have a question or ready to get started? Reach out through any of
                        the channels below.
                    </p>
                </div>

                {/* Contact image */}
                <div className={styles.heroImage}>
                    <Image
                        src="/images/car-handover.png"
                        alt="Get in touch with VEXON"
                        width={640}
                        height={340}
                        className={styles.heroImg}
                        priority
                    />
                </div>

                <div className={styles.methods}>
                    <div className={styles.method}>
                        <div className={styles.methodIcon}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <div className={styles.methodContent}>
                            <h3>Phone</h3>
                            <p>
                                <a href="tel:+2349113047990">+234 911 304 7990</a>
                            </p>
                            <p>
                                <a href="tel:+2349127627280">+234 912 762 7280</a>
                            </p>
                        </div>
                    </div>

                    <div className={styles.method}>
                        <div className={styles.methodIcon}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div className={styles.methodContent}>
                            <h3>Email</h3>
                            <p>
                                <a href="mailto:vexon005@gmail.com">vexon005@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    <div className={styles.method}>
                        <div className={styles.methodIcon}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                        <div className={styles.methodContent}>
                            <h3>WhatsApp</h3>
                            <p>
                                <a
                                    href="https://wa.me/2349113047990"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chat with VEXON
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.whatsappCta}>
                    <h2>Prefer WhatsApp?</h2>
                    <p>Reach us directly for a quick conversation.</p>
                    <a
                        href="https://wa.me/2349113047990?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20VEXON."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappBtn}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Request Inspection
                    </a>
                </div>
            </div>
        </section>
    );
}
