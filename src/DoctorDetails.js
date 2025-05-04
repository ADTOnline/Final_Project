import React, { useState, useEffect } from 'react';
import './DoctorDetails.css';
import axios from 'axios';


function DoctorDetails() {
    const doctorDetailsData = [
        { id: 1, name: "Dr. Anna Patel", specialization: "Cardiologist", experience: 14, contact: "222-333-4444", clinicAddress: "12 Maple Street, Springfield" },
        { id: 2, name: "Dr. Samir Singh", specialization: "Dermatologist", experience: 9, contact: "333-444-5555", clinicAddress: "34 Oak Avenue, Bridgeport" },
        { id: 3, name: "Dr. Olivia Martinez", specialization: "Pediatrician", experience: 7, contact: "444-555-6666", clinicAddress: "56 Pine Road, Riverside" },
        { id: 4, name: "Dr. Robert Lee", specialization: "Neurologist", experience: 11, contact: "555-666-7777", clinicAddress: "78 Cedar Lane, Lakeside" },
        { id: 5, name: "Dr. Sophia Chen", specialization: "Orthopedic Surgeon", experience: 18, contact: "666-777-8888", clinicAddress: "90 Birch Boulevard, Hillview" },
    ];

    
    const [doctorDetails, setDoctorDetails] = useState([]);


    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get('/api/doctors');
                setDoctorDetails(response.data); 
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };

        fetchDoctorDetails();
        
        setDoctorDetails(doctorDetailsData);
    }, []);

    return (
        <div className="doctor-details-container">
            <h2>Doctor Details</h2>
            <div className="doctor-details-cards">
                {doctorDetails.map(doctor => (
                    <div className="doctor-details-card" key={doctor.id}>
                        <p><strong>Name:</strong> {doctor.name}</p>
                        <p><strong>Specialization:</strong> {doctor.specialization}</p>
                        <p><strong>Experience:</strong> {doctor.experience} years</p>
                        <p><strong>Contact:</strong> {doctor.contact}</p>
                        <p><strong>Clinic Address:</strong> {doctor.clinicAddress}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoctorDetails;
