import React, { useRef } from 'react';
import { Cloud, MonitorPlay, GraduationCap, Share2, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Products.css';

const Products = () => {
    const products = [
        {
            id: 'image-storage',
            icon: <Cloud size={32} />,
            title: 'Medical Image Storage',
            description: 'Securely store and manage medical imaging data using modern server infrastructure. Upload DICOM scans and clinical documents, access them anytime, and maintain organized patient records.',
            linkText: 'Learn More'
        },
        {
            id: 'diagnostic-viewer',
            icon: <MonitorPlay size={32} />,
            title: 'Diagnostic DICOM Viewer',
            description: 'View and analyze medical scans directly in your browser with our high-performance DICOM Viewer. Includes advanced tools for accurate diagnosis and detailed image analysis.',
            linkText: 'Learn More'
        },
        {
            id: 'scan-management',
            icon: <GraduationCap size={32} />,
            title: 'Patient & Scan Management',
            description: 'Easily manage patient records, diagnostic services, and scan reports in a centralized dashboard designed for scan centers and clinics.',
            linkText: 'Learn More'
        },
        {
            id: 'image-sharing',
            icon: <Share2 size={32} />,
            title: 'Secure Image Sharing',
            description: 'Instantly share medical scans and reports with doctors and patients through secure access links and protected viewing options.',
            linkText: 'Learn More'
        }
    ];

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end end"]
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    // Duplicate for 8 cards to make a 3D cylinder/globe
    const globeProducts = [...products, ...products];

    return (
        <section id="products" className="section products-section" ref={targetRef}>
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Products</h2>
                    <h3 className="section-subtitle text-gradient">
                        Vinayaga Automation is a next-generation imaging solution powered by advanced cloud technology.
                    </h3>
                </motion.div>

                {/* AUTOPLAYING LOOP VIDEO */}
                <motion.div
                    className="scroll-video-container"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="video-wrapper">
                        <video
                            src="/video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="scroll-video"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="products-globe-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="globe-scaler">
                        <div className="products-globe">
                            {globeProducts.map((product, index) => {
                                // 8 cards -> 360/8 = 45 degrees per card
                                const angle = index * 45;
                                return (
                                    <div
                                        key={`${product.id}-${index}`}
                                        className="globe-card"
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(400px)`
                                        }}
                                    >
                                        <div className="product-icon-wrapper">
                                            {product.icon}
                                        </div>
                                        <h4 className="product-title">{product.title}</h4>
                                        <p className="product-description">{product.description}</p>

                                        <div className="product-actions">
                                            <button className="btn btn-outline w-full mb-2">Start Free Trial</button>
                                            <a href={`#${product.id}`} className="product-link">
                                                {product.linkText} <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
