import styles from './HowItWorks.module.css';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Forward your booking email",
        description: "Got an offer? Just forward the email to your unique PulsePal inbox. Our AI reads and extracts every detail.",
    },
    {
        number: "02", 
        title: "AI analyzes everything",
        description: "Within seconds, PulsePal researches the venue, finds flights and hotels, calculates costs, and estimates your net earnings.",
    },
    {
        number: "03",
        title: "Make confident decisions",
        description: "Review the full analysis, see the opportunity score, and decide with clarity. Accept, negotiate, or decline — your call.",
    }
];

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
    }
};

const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
};

const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
        scale: 1, 
        rotate: 0,
        transition: { 
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    }
};

const connectorVariants = {
    hidden: { scaleY: 0 },
    visible: { 
        scaleY: 1,
        transition: { duration: 0.5, delay: 0.2 }
    }
};

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.section}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.header}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <motion.span 
                        className={styles.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        How it works
                    </motion.span>
                    <h2 className={styles.title}>
                        From email to insight<br />
                        <span className={styles.gradient}>in under 60 seconds</span>
                    </h2>
                </motion.div>
                
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.step}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <motion.div 
                                className={styles.stepNumber}
                                variants={numberVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {step.number}
                            </motion.div>
                            <motion.div 
                                className={styles.stepContent}
                                variants={stepVariants}
                            >
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </motion.div>
                            {index < steps.length - 1 && (
                                <motion.div 
                                    className={styles.connector}
                                    variants={connectorVariants}
                                    style={{ originY: 0 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
