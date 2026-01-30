import styles from './Pricing.module.css';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "Starter",
        description: "For independent artists getting started",
        price: "Free",
        period: "",
        features: [
            { text: "1 artist profile", included: true },
            { text: "AI offer analysis", included: true },
            { text: "Flight & hotel suggestions", included: true },
            { text: "Email inbox for offers", included: false },
            { text: "Custom AI instructions", included: false },
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Pro",
        description: "For serious touring artists",
        price: "€29",
        period: "/month",
        features: [
            { text: "Up to 5 artist profiles", included: true },
            { text: "AI offer analysis", included: true },
            { text: "Flight & hotel suggestions", included: true },
            { text: "Email inbox for offers", included: true },
            { text: "Custom AI instructions", included: true },
        ],
        cta: "Get Started",
        popular: true
    },
    {
        name: "Agency",
        description: "For booking agencies & managers",
        price: "€99",
        period: "/month",
        features: [
            { text: "Unlimited artist profiles", included: true },
            { text: "Everything in Pro", included: true },
            { text: "Priority support", included: true },
            { text: "Team collaboration", included: true, soon: true },
            { text: "API access", included: true, soon: true },
        ],
        cta: "Contact Sales",
        popular: false
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.95
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

const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.3 }
    }
};

export default function Pricing() {
    return (
        <section id="pricing" className={styles.section}>
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
                        Pricing
                    </motion.span>
                    <h2 className={styles.title}>
                        Plans that scale<br />
                        <span className={styles.gradient}>with your career</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Get started, upgrade when you're ready. Cancel anytime.
                    </p>
                </motion.div>
                
                <motion.div 
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {plans.map((plan, index) => (
                        <motion.div 
                            key={index} 
                            className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -12,
                                scale: plan.popular ? 1.02 : 1.03,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {plan.popular && (
                                <motion.div 
                                    className={styles.popularBadge}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    Most Popular
                                </motion.div>
                            )}
                            <div className={styles.cardHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <p className={styles.planDesc}>{plan.description}</p>
                            </div>
                            <motion.div 
                                className={styles.priceWrapper}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                            >
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.period}>{plan.period}</span>
                            </motion.div>
                            <ul className={styles.features}>
                                {plan.features.map((feature, fIndex) => (
                                    <motion.li 
                                        key={fIndex}
                                        className={!feature.included ? styles.featureExcluded : ''}
                                        variants={featureVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + fIndex * 0.05 }}
                                    >
                                        {feature.included ? (
                                            <CheckOutlined className={styles.checkIcon} />
                                        ) : (
                                            <CloseOutlined className={styles.closeIcon} />
                                        )}
                                        {feature.text}
                                        {feature.soon && <span className={styles.soonBadge}>Soon</span>}
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.a 
                                href="https://ai.pulsepal.de/" 
                                className={`${styles.ctaBtn} ${plan.popular ? styles.ctaPrimary : ''}`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {plan.cta}
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
