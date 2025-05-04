import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {

    const handleFeatureClick = (feature) => {
        console.log(`${feature} feature clicked`);
    };

    return (
        <div className="about-us-container">
            <header className="header">
                <div className="services-link">
                    <Link to="/services" className="nav-link services-button">Our Services</Link>
                </div>
            </header>

            <h2 className="about-us-heading">Welcome to NextGen Care</h2>
            <p className="about-us-description">
                NextGen Care is an all-in-one healthcare management platform designed to enhance and simplify patient care.
                Our mission is to bridge the gap between healthcare providers and patients by offering a user-friendly, efficient system that manages healthcare services seamlessly.
                With NextGen Care, you can easily access your medical records, schedule appointments, communicate with your care team, and stay engaged in your healthcare journey.

                Our passionate team is committed to transforming the healthcare experience through cutting-edge technology, delivering better outcomes and exceptional service.
                Join us in reshaping healthcare management and making a meaningful difference in patient care.
            </p>

            <div className="features-section" id="features">
                <h2>Explore Our Features</h2>
                <div className="features-cards">
                    {[
                        { title: 'Patient Management', desc: 'Efficiently organize and oversee patient records to ensure seamless care.' },
                        { title: 'Electronic Health Records', desc: 'Access and manage health records securely anytime, anywhere.' },
                        { title: 'Appointment Scheduling', desc: 'Book and manage appointments with ease for both patients and staff.' },
                        { title: 'Billing and Payment Processing', desc: 'Simplify your billing workflows with fast, hassle-free payments.' },
                        { title: 'Analytics and Reporting', desc: 'Gain actionable insights with advanced reporting and analytics tools.' }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card hoverable"
                            onClick={() => handleFeatureClick(feature.title)}
                        >
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="team-section" id="team">
                <h2>Our Amazing Team</h2>
                <div className="team-cards">
                    <div className="team-card">
                        <img src={require('./Images/chirag2.jpeg')} alt="Chirag Dodia photo" className="team-photo" />
                        <h3>Chirag Dodia</h3>
                        <p className="team-role">Full Stack Developer</p>
                    </div>
                    <div className="team-card">
                        <img src={require('./Images/ayan.jpeg')} alt="Ayan Shaikh photo" className="team-photo" />
                        <h3>Ayan Javeed Shaikh</h3>
                        <p className="team-role">Backend Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
