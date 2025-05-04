import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
    return (
        <div className="services-container">
            
            <div className="service-buttons">
                <Link to="/appointment" className="service-button">
                    Schedule Appointment
                </Link>
            </div>
            
            <h2 className="services-heading">Explore Our Services</h2>
            <div className="service-cards">
                <div className="service-card">
                    <h3>Patient Record Management</h3>
                    <p>Efficiently organize and oversee patient records to ensure seamless care.</p>
                </div>
                <div className="service-card">
                    <h3>Secure EHR Access</h3>
                    <p>Access and manage health records securely anytime, anywhere.</p>
                </div>
                <div className="service-card">
                    <h3>Real-Time Appointment Scheduling</h3>
                    <p>Book and manage appointments with ease for both patients and staff.</p>
                </div>
                <div className="service-card">
                    <h3>Insurance Claim Processing</h3>
                    <p>Submit and track insurance claims directly from the platform for faster reimbursements.</p>
                </div>
                <div className="service-card">
                    <h3>Medication Reminders &amp; Alerts</h3>
                    <p>Receive automated reminders for prescriptions and appointments to improve adherence.</p>
                </div>
                <div className="service-card">
                    <h3>Health Consultations</h3>
                    <p>Connect with healthcare providers via secure video calls from any location.</p>
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
