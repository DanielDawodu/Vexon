'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import styles from './Dealers.module.css';

interface DealerForm {
    dealerName: string;
    location: string;
    availableCars: string;
    phone: string;
}

export default function DealersPage() {
    const [form, setForm] = useState<DealerForm>({
        dealerName: '',
        location: '',
        availableCars: '',
        phone: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/leads/dealer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage(
                    'Your application has been received. Our team will review and get back to you.'
                );
                setForm({ dealerName: '', location: '', availableCars: '', phone: '' });
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setMessage('Unable to submit. Please try again later.');
        }
    };

    const benefits = [
        {
            title: 'Pre-Qualified Buyers',
            description:
                'VEXON brings buyers who have already been screened and matched based on their requirements.',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="m21 12-3.5 3.5L15 13" />
                </svg>
            ),
        },
        {
            title: 'No Inventory Takeover',
            description:
                'Your inventory stays with you. VEXON simply connects you with the right buyers.',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
        },
        {
            title: 'Reduced Time-Wasters',
            description:
                'Because buyers are pre-screened, you spend less time on enquiries that go nowhere.',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
        },
        {
            title: 'Professional Handling',
            description:
                'VEXON manages the process from introductions through to documentation and handover.',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
        },
    ];

    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                {/* Dealer lot banner image */}
                <div className={styles.bannerImage}>
                    <Image
                        src="/images/dealer-lot.png"
                        alt="Premium car dealership lot"
                        width={1100}
                        height={400}
                        className={styles.bannerImg}
                        priority
                    />
                </div>
                <div className={styles.grid}>
                    {/* Benefits Column */}
                    <div className={styles.info}>
                        <h1>Sell faster with verified buyers</h1>
                        <p>
                            Partner with VEXON and connect with buyers who are ready, screened,
                            and serious about purchasing.
                        </p>

                        <ul className={styles.benefits}>
                            {benefits.map((benefit, i) => (
                                <li key={i} className={styles.benefit}>
                                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                                    <div className={styles.benefitText}>
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Form Column */}
                    <div>
                        {status === 'success' && (
                            <div className="form-message form-message--success">{message}</div>
                        )}
                        {status === 'error' && (
                            <div className="form-message form-message--error">{message}</div>
                        )}

                        <div className={styles.formCard}>
                            <h2>Become a VEXON Partner</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="dealerName" className="form-label">
                                        Dealer Name
                                    </label>
                                    <input
                                        type="text"
                                        id="dealerName"
                                        name="dealerName"
                                        className="form-input"
                                        placeholder="Your dealership name"
                                        value={form.dealerName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="location" className="form-label">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        className="form-input"
                                        placeholder="City or area"
                                        value={form.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="availableCars" className="form-label">
                                        Available Cars
                                    </label>
                                    <textarea
                                        id="availableCars"
                                        name="availableCars"
                                        className="form-textarea"
                                        placeholder="List the types of cars you have available"
                                        value={form.availableCars}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        placeholder="+234 911 304 7990"
                                        value={form.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`btn btn--blue btn--large ${styles.submitBtn}`}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading'
                                        ? 'Submitting...'
                                        : 'Become a VEXON Partner'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
