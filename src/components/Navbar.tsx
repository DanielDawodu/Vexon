'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/buyers', label: 'For Buyers' },
  { href: '/dealers', label: 'For Dealers' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.navbar}>
      <nav className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="VEXON Home">
          {/* Shield + Checkmark Logo */}
          <svg
            className={styles.logoIcon}
            width="32"
            height="36"
            viewBox="0 0 32 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1L2 7v10c0 9.5 6 17.5 14 19 8-1.5 14-9.5 14-19V7L16 1z"
              fill="#c0c0c0"
              fillOpacity="0.15"
              stroke="#9ca3af"
              strokeWidth="1.5"
            />
            <path
              d="M9 18l5 5 9-11"
              stroke="#4a6fa5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className={styles.logoText}>VEXON</span>
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/buyers"
            className={styles.cta}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>

        <Link href="/buyers" className={styles.cta} style={{ display: 'none' }}>
          Get Started
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <div
            className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}
