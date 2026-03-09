import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            id: 'starter',
            name: 'Starter',
            price: '4,999',
            period: '/month',
            description: 'Perfect for individual practitioners and small clinics getting started.',
            features: [
                '500 MB Image Storage',
                'Basic DICOM Viewer',
                'Up to 100 Patients',
                'Email Support',
                'Secure Image Sharing',
                'Basic Reports'
            ],
            buttonText: 'Get Started',
            popular: false
        },
        {
            id: 'professional',
            name: 'Professional',
            price: '12,999',
            period: '/month',
            description: 'Ideal for growing clinics and scan centers with advanced needs.',
            features: [
                '5 GB Image Storage',
                'Advanced DICOM Viewer',
                'Unlimited Patients',
                'Priority Support',
                'Secure Image Sharing',
                'Detailed Analytics & Reports',
                'Multi-user Access',
                'Patient & Scan Management'
            ],
            buttonText: 'Start Free Trial',
            popular: true
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For hospitals and imaging networks needing full-scale solutions.',
            features: [
                'Unlimited Storage',
                'Full Diagnostic Viewer',
                'Unlimited Patients',
                'Dedicated Account Manager',
                'Advanced Image Sharing',
                'Custom Integrations',
                'Multi-branch Support',
                'On-premise Option',
                'SLA & HIPAA Compliance'
            ],
            buttonText: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <section id="pricing" className="section pricing-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Pricing</h2>
                    <h3 className="section-subtitle">
                        Simple, transparent pricing that grows with your practice
                    </h3>
                    <p className="text-muted mt-2">
                        Start with a 7-day free trial. No credit card required.
                    </p>
                </motion.div>

                <div className="pricing-grid">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: plan.popular ? 1.04 : 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            {plan.popular && (
                                <div className="popular-badge">
                                    <Sparkles size={14} /> Most Popular
                                </div>
                            )}

                            <div className="pricing-header">
                                <h4 className="plan-name">{plan.name}</h4>
                                <div className="plan-price">
                                    {plan.price !== 'Custom' && (
                                        <>
                                            <span className="currency">₹</span>
                                            <motion.span
                                                className="amount"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                            >
                                                {plan.price}
                                            </motion.span>
                                        </>
                                    )}
                                    {plan.price === 'Custom' && <span className="amount">{plan.price}</span>}
                                    {plan.period && <span className="period">{plan.period}</span>}
                                </div>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="feature-row">
                                        <Check size={18} className="check-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`btn pricing-btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                            >
                                {plan.buttonText} <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
