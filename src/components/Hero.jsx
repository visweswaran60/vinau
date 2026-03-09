import React from 'react';
import { ArrowRight, Cloud, Shield, Zap, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="hero-gradient-overlay"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-badge" variants={itemVariants}>
                        <span className="badge-dot"></span>
                        Next-Generation Cloud PACS
                    </motion.div>

                    <div className="mask-reveal">
                        <motion.h1
                            className="hero-title text-gradient"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
                        >
                            Affordable <br />Medical Imaging
                        </motion.h1>
                    </div>

                    <div className="mask-reveal">
                        <motion.p
                            className="hero-description"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, -0.05, 0.95] }}
                        >
                            Vinayaga Automation provides surgical-grade precision DICOM viewing in any browser. Seamless, secure, and blazingly fast.
                        </motion.p>
                    </div>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <button className="btn btn-primary btn-lg">
                            Start Free Trial <ArrowRight size={20} />
                        </button>
                        <button className="btn btn-outline btn-lg">
                            Book a Demo
                        </button>
                    </motion.div>

                    <motion.div className="hero-features" variants={itemVariants}>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Zap size={20} />
                            </div>
                            <span>3D Volume Rendering</span>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Shield size={20} />
                            </div>
                            <span>Secure & Compliant</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    <div className="hero-image-container">
                        <img src="/image.png" alt="Cloud PACS Illustration" className="hero-illustration" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                onClick={() => {
                    const nextSection = document.querySelector('.device-showcase-wrapper');
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                    }
                }}
            >
                <div className="scroll-indicator-inner">
                    <span className="scroll-text">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
