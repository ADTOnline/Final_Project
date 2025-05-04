import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaArrowLeft } from 'react-icons/fa';
import './SignUp.css';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form validation
        const newErrors = {};
        if (username.trim() === '') {
            newErrors.username = 'Username is required';
        }
        if (email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (password.trim() === '') {
            newErrors.password = 'Password is required';
        }
        if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        // If there are no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            // Handle form submission
            console.log('Form submitted:', { username, email, password });

            navigate('/about');
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <div className="form-group">
                    <label htmlFor="username"><FaUser className="icon" /> Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email"><FaEnvelope className="icon" /> Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password"><FaLock className="icon" /> Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword"><FaLock className="icon" /> Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  style={{ width: '360px', height: '48px', borderRadius: '8px' }}
                >
                  Sign Up
                </button>
            </form>

            <p className="back-to-front">
                <a
                  href="/"
                  className="back-link"
                  style={{ width: '360px', height: '48px', lineHeight: '48px', display: 'inline-block', borderRadius: '8px' }}
                >
                  <FaArrowLeft className="icon" /> Back to Home Page
                </a>
            </p>
        </div>
    );
}

export default SignUp;
