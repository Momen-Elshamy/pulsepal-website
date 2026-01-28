import styles from './CTA.module.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
};

export default function CTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.glow}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1]
                    }}
                />
                <motion.div 
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2 
                        className={styles.title}
                        variants={itemVariants}
                    >
                        Ready to book smarter?
                    </motion.h2>
                    <motion.p 
                        className={styles.subtitle}
                        variants={itemVariants}
                    >
                        Join artists and agencies who are making better booking decisions with AI.
                    </motion.p>
                    <motion.a 
                        href="https://ai.pulsepal.de/" 
                        className={styles.ctaBtn}
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 15px 50px rgba(139, 92, 246, 0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get Early Access
                        <ArrowRightOutlined />
                    </motion.a>
                    <motion.p 
                        className={styles.note}
                        variants={itemVariants}
                    >
                        Free to start • No credit card required
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
