import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock, FaArrowLeft } from 'react-icons/fa';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const newErrors = {};
        if (username.trim() === '') {
            newErrors.username = 'Username is required';
        }
        if (password.trim() === '') {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post('/api/login', { username, password });
                console.log(response.data);
                navigate('/dashboard');
            } catch (error) {
                console.error('Login failed:', error.response?.data || error);
                setErrors({ login: 'Invalid username or password' });
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">
                        <FaUser className="icon" /> Username:
                    </label>
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
                    <label htmlFor="password">
                        <FaLock className="icon" /> Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                {errors.login && <p className="error">{errors.login}</p>}

                <button
                    type="submit"
                    className="submit-button"
                    style={{ width: '360px', height: '48px', borderRadius: '8px' }}
                >
                    Login
                </button>
            </form>

            <p className="back-to-front">
                <Link
                    to="/"
                    className="back-link"
                    style={{
                        width: '360px',
                        height: '48px',
                        lineHeight: '48px',
                        display: 'inline-block',
                        borderRadius: '8px'
                    }}
                >
                    <FaArrowLeft className="icon" /> Back to Home Page
                </Link>
            </p>
        </div>
    );
}

export default Login;