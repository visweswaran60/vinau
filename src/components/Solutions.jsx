import React from 'react';
import { Building2, Stethoscope, Microscope, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './Solutions.css';

const Solutions = () => {
    const solutions = [
        {
            id: 'hospitals',
            icon: <Building2 size={40} />,
            title: 'Hospitals & Clinics',
            description: 'Streamline your radiology workflow, securely store massive amounts of imaging data, and facilitate seamless collaboration between different departments and referring physicians.'
        },
        {
            id: 'doctors',
            icon: <Stethoscope size={40} />,
            title: 'Doctors & Specialists',
            description: 'Access patient imaging from anywhere, at any time. Our fast HTML5 viewer allows for quick diagnosis and easy sharing of findings with patients or colleagues.'
        },
        {
            id: 'imaging-centers',
            icon: <Microscope size={40} />,
            title: 'Imaging Centers',
            description: 'Provide an overarching solution for distributing images to referring doctors and patients without the need for burning CDs or maintaining complex local IT infrastructure.'
        },
        {
            id: 'patients',
            icon: <Users size={40} />,
            title: 'Patients',
            description: 'Take control of your medical history. Securely receive, store, and share your medical images with any specialist worldwide using just a secure link.'
        }
    ];

    return (
        <section id="solutions" className="section solutions-section">
            <div className="container">
                <div className="solutions-container">
                    <motion.div
                        className="solutions-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">Solutions For</h2>
                        <h3 className="solutions-subtitle">
                            Vinayaga Automation offers medical software solutions for all users and different use cases
                        </h3>
                        <p className="solutions-description">
                            Whether you are a large hospital network, a specialized clinic, a research institute, or an individual patient, Vinayaga Automation provides tailored, secure, and affordable cloud-based medical imaging solutions that fit your specific needs.
                        </p>
                        <button className="btn btn-primary btn-lg mt-4">
                            Explore All Solutions
                        </button>
                    </motion.div>

                    <motion.div
                        className="solutions-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                    >
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.id}
                                className="solution-card"
                                variants={{
                                    hidden: { opacity: 0, x: 30 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateZ: index % 2 === 0 ? 1 : -1,
                                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
                                }}
                            >
                                <div className="solution-icon">
                                    {solution.icon}
                                </div>
                                <h4 className="solution-title">{solution.title}</h4>
                                <p className="solution-text">{solution.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
