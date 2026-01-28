import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoArea}>
                    <div className={styles.logoIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                    </div>
                    <span className={styles.logoText}>PulsePal</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/features" className={styles.navLink}>Features</Link>
                    <Link href="/artists" className={styles.navLink}>For Artists</Link>
                    <Link href="/agents" className={styles.navLink}>For Agents</Link>
                    <Link href="/promoters" className={styles.navLink}>For Promoters</Link>
                    <Link href="/pricing" className={styles.navLink}>Pricing</Link>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.btnSecondary}>Log In</button>
                    <button className={styles.btnPrimary}>
                        Open App
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
  