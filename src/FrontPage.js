import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo1.png';
import './FrontPage.css';

function FrontPage() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        try {
            navigate('/signup'); 
        } catch (error) {
            console.error('Error navigating to sign-up page:', error);
        }
    };

    const handleLoginClick = () => {
        try {
            navigate('/login'); 
        } catch (error) {
            console.error('Error navigating to login page:', error);
        }
    };

    return (
        <div className="front-page">
            <div className="hero-section">
                <div className="logo-container">
                    <img src={logo} alt="HealthSync Logo" className="logo" />
                </div>

                <h1>Welcome to NextGen Care</h1>
                <p>Enhancing Healthcare Operations for Exceptional Patient Outcomes</p>

                <div className="auth-buttons">
                    <button className="cta-button" onClick={handleSignUpClick}>
                        Sign Up
                    </button>
                    <button className="cta-button" onClick={handleLoginClick}>
                        Login
                    </button>
                </div>
            </div>

            <footer className="footer">
                <h2>Contact Us</h2>
                <div className="contact-details">
                    <p>Email: contact@nextgencare.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <ul className="social-links">
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default FrontPage;