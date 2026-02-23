'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/buyers', label: 'For Buyers' },
  { href: '/dealers', label: 'For Dealers' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={close}>
          VEXON
        </Link>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/buyers" className={styles.cta} onClick={close}>
            Get Started
          </Link>
        </div>

        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
          onClick={close}
        />
      </div>
    </nav>
  );
}
