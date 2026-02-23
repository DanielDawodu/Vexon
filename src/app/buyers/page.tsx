'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import styles from './Buyers.module.css';

interface FormData {
    fullName: string;
    phone: string;
    carType: string;
    budget: string;
    timeline: string;
}

export default function BuyersPage() {
    const [form, setForm] = useState<FormData>({
        fullName: '',
        phone: '',
        carType: '',
        budget: '',
        timeline: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/leads/buyer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage(
                    'Your request has been submitted. We will be in touch shortly.'
                );
                setForm({ fullName: '', phone: '', carType: '', budget: '', timeline: '' });
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setMessage('Unable to submit. Please try again later.');
        }
    };

    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                {/* Header with image */}
                <div className={styles.headerGrid}>
                    <div className={styles.headerContent}>
                        <h1>Looking for a verified car?</h1>
                        <p>
                            Tell us what you are looking for. Every vehicle recommended through
                            VEXON goes through inspection and documentation checks before any
                            viewing or payment takes place.
                        </p>
                    </div>
                    <div className={styles.headerImage}>
                        <Image
                            src="/images/hero-inspection.png"
                            alt="Car inspection process"
                            width={480}
                            height={320}
                            className={styles.sectionImg}
                            priority
                        />
                    </div>
                </div>

                {status === 'success' && (
                    <div className="form-message form-message--success">{message}</div>
                )}
                {status === 'error' && (
                    <div className="form-message form-message--error">{message}</div>
                )}

                <div className={styles.formCard}>
                    <h2>Request Verification</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="form-input"
                                placeholder="Enter your full name"
                                value={form.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                                Phone Number (WhatsApp)
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

                        <div className="form-group">
                            <label htmlFor="carType" className="form-label">
                                Car Type
                            </label>
                            <input
                                type="text"
                                id="carType"
                                name="carType"
                                className="form-input"
                                placeholder="e.g. Toyota Camry, Honda Accord"
                                value={form.carType}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="budget" className="form-label">
                                Budget Range
                            </label>
                            <select
                                id="budget"
                                name="budget"
                                className="form-select"
                                value={form.budget}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select your budget range</option>
                                <option value="under-5m">Under 5 Million</option>
                                <option value="5m-10m">5 - 10 Million</option>
                                <option value="10m-20m">10 - 20 Million</option>
                                <option value="20m-50m">20 - 50 Million</option>
                                <option value="above-50m">Above 50 Million</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="timeline" className="form-label">
                                Purchase Timeline
                            </label>
                            <select
                                id="timeline"
                                name="timeline"
                                className="form-select"
                                value={form.timeline}
                                onChange={handleChange}
                                required
                            >
                                <option value="">When do you plan to buy?</option>
                                <option value="immediately">Immediately</option>
                                <option value="1-2-weeks">1 - 2 Weeks</option>
                                <option value="1-month">Within a Month</option>
                                <option value="just-looking">Just Exploring</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn--primary btn--large ${styles.submitBtn}`}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Submitting...' : 'Request Verification'}
                        </button>
                    </form>
                </div>

                <div className={styles.note}>
                    <p>
                        Your information is handled with care. We only use it to match you
                        with verified vehicles that meet your criteria.
                    </p>
                </div>
            </div>
        </section>
    );
}
