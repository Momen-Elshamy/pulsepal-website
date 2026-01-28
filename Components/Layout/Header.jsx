import Link from 'next/link';
import styles from './Header.module.css';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <motion.header 
            className={styles.header}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1],
                delay: 0.1
            }}
        >
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Link href="/" className={styles.logo}>
                        <img src="/pulsepal_logo.svg" alt="PulsePal" height={28} />
                    </Link>
                </motion.div>
                
                <nav className={styles.nav}>
                    {['Features', 'How it Works', 'Pricing'].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <Link href={`#${item.toLowerCase().replace(' ', '-')}`}>
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                </nav>
                
                <motion.div 
                    className={styles.actions}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link href="https://ai.pulsepal.de/" className={styles.loginBtn}>
                        Log in
                    </Link>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link href="https://ai.pulsepal.de/" className={styles.ctaBtn}>
                            Get Early Access
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.header>
    );
}
