import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <motion.div
                    className="cta-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cta-background">
                        <div className="particle particle-1"></div>
                        <div className="particle particle-2"></div>
                        <div className="particle particle-3"></div>
                    </div>
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to transform your medical imaging?</h2>
                        <p className="cta-description">
                            Start your 7 Days Free Trial today. No credit card required. Experience the speed, security, and convenience of our modern Cloud PACS and Diagnostic DICOM Viewer.
                        </p>

                        <div className="cta-actions">
                            <button className="btn btn-primary btn-lg cta-btn">
                                Start 7 Days Free Trial <ArrowRight size={20} />
                            </button>
                            <button className="btn btn-outline cta-btn reverse">
                                <PhoneCall size={20} /> Contact Sales
                            </button>
                        </div>

                        <p className="cta-help">
                            Do you need help to choose the right solution for your need? Ask your questions to our experts and get help.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
