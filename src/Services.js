import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
    return (
        <div className="services-container">
            
            <Link to="/appointment" className="schedule-appointment-link">Click here to schedule an appointment</Link>
            
            <h2 className="services-heading">Our Services</h2>
            <div className="service-cards">
                <div className="service-card">
                    <h3>Primary Care Consultation</h3>
                    <p>Comprehensive consultation with experienced physicians for general health concerns.</p>
                </div>
                <div className="service-card">
                    <h3>Specialized Treatments</h3>
                    <p>Advanced treatments tailored to specific medical conditions, including chronic diseases and acute illnesses.</p>
                </div>
                <div className="service-card">
                    <h3>Diagnostic Services</h3>
                    <p>State-of-the-art diagnostic tests and procedures for accurate health assessments and early detection of diseases.</p>
                </div>
                <div className="service-card">
                    <h3>Preventive Care Programs</h3>
                    <p>Personalized preventive care plans to promote overall wellness and reduce the risk of future health problems.</p>
                </div>
                <div className="service-card">
                    <h3>Emergency Medical Care</h3>
                    <p>Immediate medical attention and emergency services for urgent healthcare needs and critical situations.</p>
                </div>
            </div>
            <div className="service-buttons">
                <Link to="/doctor-details" className="service-button">View Doctor Details</Link>
                <Link to="/patient-details" className="service-button">View Patient Details</Link>
            </div>
            <div className="service-footer">
                <Link to="/terms-of-service" className="more-details-link">More Details</Link>
            </div>
            
        </div>
    );
}

export default Services;
