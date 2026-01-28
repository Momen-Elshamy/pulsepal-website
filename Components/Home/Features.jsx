import styles from './Features.module.css';
import { 
    FileSearchOutlined, 
    RocketOutlined, 
    HomeOutlined, 
    DollarOutlined, 
    CheckCircleOutlined,
    CalendarOutlined 
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <FileSearchOutlined />,
        title: "AI Offer Analysis",
        description: "Forward booking emails and get instant AI analysis — venue reputation, timing insights, and opportunity scoring.",
        highlight: "Save 2+ hours per offer"
    },
    {
        icon: <RocketOutlined />,
        title: "Smart Flight Search",
        description: "Automatically finds the best flights based on your preferences, compares prices, and factors costs into your earnings.",
        highlight: "Best routes, best prices"
    },
    {
        icon: <HomeOutlined />,
        title: "Hotel Recommendations",
        description: "AI suggests hotels near the venue with the right balance of price, location, and quality for touring artists.",
        highlight: "Venue-aware picks"
    },
    {
        icon: <DollarOutlined />,
        title: "Financial Breakdown",
        description: "See exactly what you'll earn after travel, taxes, and fees. No more spreadsheet guesswork.",
        highlight: "Know your net before you commit"
    },
    {
        icon: <CheckCircleOutlined />,
        title: "Decision Intelligence",
        description: "Get a clear recommendation based on financial return, logistics complexity, and career impact.",
        highlight: "Strong / Moderate / Weak"
    },
    {
        icon: <CalendarOutlined />,
        title: "Tour Optimization",
        description: "Planning multiple gigs? PulsePal helps you route efficiently and maximize earnings across dates.",
        highlight: "Coming soon"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 40,
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

const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
    }
};

export default function Features() {
    return (
        <section id="features" className={styles.section}>
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
                        Features
                    </motion.span>
                    <h2 className={styles.title}>
                        Everything you need to<br />
                        <span className={styles.gradient}>book smarter</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Stop losing money on bad deals. PulsePal gives you the insights you need to make confident booking decisions.
                    </p>
                </motion.div>
                
                <motion.div 
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.card}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -12,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className={styles.iconWrapper}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDesc}>{feature.description}</p>
                            <motion.span 
                                className={styles.highlight}
                                whileHover={{ scale: 1.05 }}
                            >
                                {feature.highlight}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
