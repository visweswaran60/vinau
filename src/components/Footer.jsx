import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const listVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-top"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    <motion.div className="footer-brand" variants={listVariants}>
                        <a href="/" className="logo footer-logo">
                            <img src="/logo.png" alt="Vinayaga Automation" className="logo-img footer-logo-img" />
                            <span className="logo-text">Vinayaga Automation</span>
                        </a>
                        <p className="footer-description">
                            Affordable Cloud PACS services with integrated Online DICOM Viewer. View, Share and Store DICOM Images and Clinical Documents.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Youtube size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                        </div>
                    </motion.div>

                    <div className="footer-links">
                        <motion.div className="footer-column" variants={listVariants}>
                            <h4 className="footer-heading">Products</h4>
                            <ul className="footer-list">
                                <li><a href="#">Cloud PACS</a></li>
                                <li><a href="#">Diagnostic DICOM Viewer</a></li>
                                <li><a href="#">Medical Image Teaching</a></li>
                                <li><a href="#">Medical Image Sharing</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </motion.div>

                        <motion.div className="footer-column" variants={listVariants}>
                            <h4 className="footer-heading">Solutions For</h4>
                            <ul className="footer-list">
                                <li><a href="#">Hospitals & Clinics</a></li>
                                <li><a href="#">Doctors & Specialists</a></li>
                                <li><a href="#">Imaging Centers</a></li>
                                <li><a href="#">Patients</a></li>
                            </ul>
                        </motion.div>

                        <motion.div className="footer-column" variants={listVariants}>
                            <h4 className="footer-heading">Company</h4>
                            <ul className="footer-list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">News & Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Partner Program</a></li>
                            </ul>
                        </motion.div>

                        <motion.div className="footer-column" variants={listVariants}>
                            <h4 className="footer-heading">Legal</h4>
                            <ul className="footer-list">
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">HIPAA Compliance</a></li>
                                <li><a href="#">Security</a></li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Vinayaga Automation. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">English</a>
                        <a href="#">Site Map</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
