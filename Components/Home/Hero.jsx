import styles from './Hero.module.css';
import { ArrowRightOutlined, ThunderboltFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
};

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Effects */}
            <div className={styles.gridBg} />
            <div className={styles.gradientOrb} />
            <div className={styles.gradientOrb2} />
            
            {/* Floating Particles */}
            <div className={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={styles.particle}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0],
                            y: [0, -100, -200],
                            x: Math.random() > 0.5 ? [0, 20, 0] : [0, -20, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                            ease: "easeOut"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${60 + Math.random() * 40}%`,
                        }}
                    />
                ))}
            </div>
            
            <motion.div 
                className={styles.container}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Announcement Pill */}
                <motion.div 
                    className={styles.pill}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                >
                    <ThunderboltFilled className={styles.pillIcon} />
                    <span>AI-Powered Booking Intelligence</span>
                </motion.div>
                
                {/* Headline */}
                <motion.h1 
                    className={styles.title}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    Stop Guessing.<br />
                    <span className={styles.gradient}>Start Earning More.</span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                    className={styles.subtitle}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    PulsePal analyzes every booking offer with AI — travel costs, venue reputation, 
                    financial breakdown — so you know exactly what you'll earn before you say yes.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                    className={styles.buttons}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                >
                    <motion.a 
                        href="https://ai.pulsepal.de/" 
                        className={styles.primaryBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get Early Access
                        <ArrowRightOutlined />
                    </motion.a>
                    <motion.a 
                        href="#features" 
                        className={styles.secondaryBtn}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        See How It Works
                    </motion.a>
                </motion.div>
                
                {/* Social Proof */}
                <motion.div 
                    className={styles.socialProof}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.avatars}>
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className={styles.avatar}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                                style={{
                                    backgroundImage: [
                                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                                    ][i]
                                }}
                            />
                        ))}
                    </div>
                    <span>Trusted by touring artists & agencies across Europe</span>
                </motion.div>
                
                {/* Dashboard Preview */}
                <motion.div 
                    className={styles.dashboardWrapper}
                    variants={scaleIn}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className={styles.dashboardGlow} />
                    <motion.div 
                        className={styles.dashboard}
                        whileHover={{ 
                            rotateX: 0,
                            y: -12,
                            transition: { duration: 0.4 }
                        }}
                    >
                        <img 
                            src="/dashboard-preview.jpg" 
                            alt="PulsePal AI Analysis Dashboard" 
                            className={styles.dashboardImg}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
