import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './DeviceShowcase.css';

const DeviceShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Laptop animations (opens up faster, centers, stays, then spins out later)
    const laptopRotateX = useTransform(scrollYProgress, [0, 0.05, 0.45], [75, 0, -10]);
    const laptopRotateY = useTransform(scrollYProgress, [0, 0.45, 0.65], [0, 0, -90]);
    const laptopScale = useTransform(scrollYProgress, [0, 0.05, 0.45, 0.65], [0.75, 1, 1, 0.4]);
    const laptopOpacity = useTransform(scrollYProgress, [0.55, 0.65], [1, 0]);

    // Phone animations (spins in while scaling up)
    const phoneY = useTransform(scrollYProgress, [0.5, 0.75], [300, 0]);
    const phoneRotateY = useTransform(scrollYProgress, [0.5, 0.75], [90, 0]);
    const phoneScale = useTransform(scrollYProgress, [0.5, 0.75], [0.5, 1]);
    const phoneOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

    // Text animations
    const text1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.4, 0.5], [0, 1, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);

    // Floating Feature Tags Opacity
    const features1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.45, 0.55], [0, 1, 1, 0]);
    const features2Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="device-showcase-wrapper">
            <div className="sticky-container">

                {/* Floating Texts */}
                <motion.div className="showcase-text left-text" style={{ opacity: text1Opacity }}>
                    <h2>Advanced Web DICOM Viewer</h2>
                    <p>Load hundreds of slices instantly right in your browser. No local installation required.</p>
                </motion.div>

                <motion.div className="showcase-text right-text" style={{ opacity: text2Opacity }}>
                    <h2>Pristine Mobile Experience</h2>
                    <p>Access patient scans anywhere, anytime. Fully responsive HTML5 medical imaging.</p>
                </motion.div>

                <div className="scene">
                    {/* 3D Laptop */}
                    <motion.div
                        className="laptop-wrapper"
                        style={{
                            rotateX: laptopRotateX,
                            rotateY: laptopRotateY,
                            scale: laptopScale,
                            opacity: laptopOpacity
                        }}
                    >
                        <div className="laptop-lid">
                            <div className="laptop-screen">
                                <img src="/dicom_laptop_exact.png" alt="DICOM Viewer on Laptop" />
                                <div className="screen-overlay"></div>
                            </div>
                            <div className="hotspot screen-hotspot" data-tip="4K Medical Grade Resolution"></div>
                            <div className="laptop-logo">Vinayaga</div>
                        </div>
                        <div className="laptop-base">
                            <div className="laptop-keyboard">
                                <div className="keyboard-row">
                                    {[...Array(14)].map((_, i) => <div key={i} className="key fn"></div>)}
                                </div>
                                <div className="keyboard-row">
                                    {[...Array(13)].map((_, i) => <div key={i} className="key"></div>)}
                                    <div className="key backspace"></div>
                                </div>
                                <div className="keyboard-row">
                                    <div className="key tab"></div>
                                    {[...Array(12)].map((_, i) => <div key={i} className="key"></div>)}
                                    <div className="key slash"></div>
                                </div>
                                <div className="keyboard-row">
                                    <div className="key caps"></div>
                                    {[...Array(11)].map((_, i) => <div key={i} className="key"></div>)}
                                    <div className="key enter"></div>
                                </div>
                                <div className="keyboard-row">
                                    <div className="key shift"></div>
                                    {[...Array(10)].map((_, i) => <div key={i} className="key"></div>)}
                                    <div className="key shift-right"></div>
                                </div>
                                <div className="keyboard-row">
                                    <div className="key ctrl"></div>
                                    <div className="key opt"></div>
                                    <div className="key cmd"></div>
                                    <div className="key space"></div>
                                    <div className="key cmd"></div>
                                    <div className="key opt"></div>
                                    <div className="key arrows"></div>
                                </div>
                            </div>
                            <div className="laptop-trackpad"></div>
                            <div className="hotspot trackpad-hotspot" data-tip="Multi-touch Gesture Support"></div>
                        </div>

                        {/* Floating Laptop Features */}
                        <motion.div className="feature-tags-container" style={{ opacity: features1Opacity }}>
                            <div className="feature-tag t1">Full MPR Support</div>
                            <div className="feature-tag t2">60 FPS Rendering</div>
                            <div className="feature-tag t3">Desktop Class Performance</div>
                            <div className="feature-tag t4">Cross-Platform Sync</div>
                        </motion.div>
                    </motion.div>

                    {/* 3D Phone */}
                    <motion.div
                        className="phone-wrapper"
                        style={{
                            y: phoneY,
                            rotateY: phoneRotateY,
                            scale: phoneScale,
                            opacity: phoneOpacity
                        }}
                    >
                        <div className="phone">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                                <img src="/dicom_mobile_exact.png" alt="DICOM Viewer on Mobile" />
                                <div className="screen-overlay"></div>
                            </div>
                        </div>
                        <div className="hotspot phone-hotspot" data-tip="Intuitive Touch Controls"></div>

                        {/* Floating Phone Features */}
                        <motion.div className="feature-tags-container" style={{ opacity: features2Opacity }}>
                            <div className="feature-tag m1">Touch Optimized</div>
                            <div className="feature-tag m2">Low Latency Streaming</div>
                            <div className="feature-tag m3">Remote Diagnostics</div>
                            <div className="feature-tag m4">Secure Access</div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DeviceShowcase;
