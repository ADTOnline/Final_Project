import React, { useState } from 'react';
import './Appointment.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AppointmentScheduler() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [errors, setErrors] = useState({});
    const [isScheduled, setIsScheduled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!name.trim()) {
            errors.name = 'Please enter your name';
        }
        if (!date) {
            errors.date = 'Please select a date';
        }
        if (!time) {
            errors.time = 'Please select a time';
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        console.log('Appointment scheduled:', { name, date, time });
        setName('');
        setDate('');
        setTime('');
        setErrors({});
        setIsScheduled(true);
    };

    return (
        <div className="appointment-container">
            <h2>Schedule an Appointment</h2>
            {isScheduled ? (
                <div>
                    <div className="success-message">Appointment scheduled successfully!</div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        {errors.name && <div className="error-message">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <div className="input-with-icon">
                            <FaCalendarAlt className="icon" />
                            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                        </div>
                        {errors.date && <div className="error-message">{errors.date}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <div className="input-with-icon">
                            <FaClock className="icon" />
                            <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                        </div>
                        {errors.time && <div className="error-message">{errors.time}</div>}
                    </div>
                    <button type="submit">Schedule</button>
                </form>
            )}
        </div>
    );
}

export default AppointmentScheduler;
