import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Dr. Sarah Jenkins",
            role: "Chief Radiologist",
            content: "Vinayaga Automation is the ideal PACS SaaS solution. It is user-friendly, heavily customizable and one of the very best Cloud PACS solutions available today. The viewer is incredibly fast and the tools provided are top-notch.",
            rating: 5
        },
        {
            id: 2,
            name: "Mark Thompson",
            role: "Clinic Administrator",
            content: "Thanks to the Vinayaga Automation team for their excellent product and support! Continually impressed with the service, features, speed and support. I can highly recommend the company to everyone looking for a robust DICOM solution.",
            rating: 5
        },
        {
            id: 3,
            name: "Dr. Ahmed Rahman",
            role: "Orthopedic Surgeon",
            content: "Solution for the transmission of medical images and reports in zero time. The ability to share patient scans securely with out-of-network specialists has completely transformed how we handle referrals and collaborate.",
            rating: 5
        },
        {
            id: 4,
            name: "Lisa Chen",
            role: "IT Director, City Hospital",
            content: "Implementation was seamless. The API integration capabilities allowed us to connect our existing EHR system without any downtime. Truly a game-changer for our digital workflow.",
            rating: 5
        },
        {
            id: 5,
            name: "Prof. James Miller",
            role: "Medical Researcher",
            content: "The 3D reconstruction quality is unparalleled. For research purposes, having this level of detail in a web browser saves us hours of data preparation. Highly recommended for academic institutions.",
            rating: 5
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Testimonials</h2>
                    <h3 className="section-subtitle">What did users say about us?</h3>
                    <p className="text-muted mt-2">
                        Join thousands of satisfied medical professionals worldwide.
                    </p>
                </motion.div>

                <div className="testimonials-slider-container">
                    <motion.div
                        className="testimonials-track"
                        animate={{ x: `-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={testimonial.id}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="quote-icon">
                                    <Quote size={32} />
                                </div>

                                <div className="stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" stroke="none" />
                                    ))}
                                </div>

                                <p className="testimonial-content">"{testimonial.content}"</p>

                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">{testimonial.name}</h4>
                                        <span className="author-role">{testimonial.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="testimonials-controls">
                    <button className="control-btn" onClick={prevTestimonial}><ChevronLeft size={24} /></button>
                    <div className="dots">
                        {testimonials.map((_, i) => (
                            <span
                                key={i}
                                className={`dot ${currentIndex === i ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(i)}
                            ></span>
                        ))}
                    </div>
                    <button className="control-btn" onClick={nextTestimonial}><ChevronRight size={24} /></button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
