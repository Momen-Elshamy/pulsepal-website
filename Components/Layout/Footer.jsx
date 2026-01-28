import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <img src="/pulsepal_logo.svg" alt="PulsePal" height={24} />
                        <p className={styles.tagline}>
                            AI-powered booking intelligence for touring artists.
                        </p>
                    </div>
                    
                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Product</h4>
                            <Link href="#features">Features</Link>
                            <Link href="#pricing">Pricing</Link>
                            <Link href="#how-it-works">How it Works</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Company</h4>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/careers">Careers</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Legal</h4>
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/terms">Terms of Service</Link>
                            <Link href="/imprint">Imprint</Link>
                        </div>
                    </div>
                </div>
                
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} PulsePal. All rights reserved.</p>
                    <p>Made with 💜 in Germany</p>
                </div>
            </div>
        </footer>
    );
}
