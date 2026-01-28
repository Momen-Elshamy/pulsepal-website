import styles from './Stats.module.css';
import { motion } from 'framer-motion';

const stats = [
    {
        value: "2hrs+",
        label: "Saved per offer analysis"
    },
    {
        value: "15%",
        label: "Average earnings increase"
    },
    {
        value: "60s",
        label: "From email to full report"
    },
    {
        value: "24/7",
        label: "AI analysis available"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const statVariants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.9
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

export default function Stats() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.stat}
                            variants={statVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div 
                                className={styles.value}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: 0.2 + index * 0.1,
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className={styles.label}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
