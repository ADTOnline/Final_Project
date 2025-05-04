import React from 'react';
import './PatientDetails.css';

function PatientDetails() {
    const patientDetailsData = [
        { id: 1, name: "Mark Anderson", age: 29, gender: "Male", contact: "210-555-1234", address: "15 Elm Street, Oakwood" },
        { id: 2, name: "Sara Nguyen", age: 42, gender: "Female", contact: "310-555-5678", address: "82 Pine Drive, Riverdale" },
        { id: 3, name: "Carlos Gomez", age: 36, gender: "Male", contact: "415-555-9012", address: "47 Cedar Avenue, Crestview" },
        { id: 4, name: "Priya Patel", age: 31, gender: "Female", contact: "646-555-3456", address: "120 Maple Lane, Sunnyvale" },
        { id: 5, name: "Liam O'Connor", age: 54, gender: "Male", contact: "718-555-7890", address: "9 Birch Road, Meadowbrook" },
        { id: 6, name: "Aisha Rahman", age: 27, gender: "Female", contact: "917-555-2345", address: "33 Walnut Street, Brookside" },
        { id: 7, name: "Ethan Wright", age: 63, gender: "Male", contact: "212-555-6789", address: "58 Spruce Drive, Lakeview" },
        { id: 8, name: "Mia Sullivan", age: 45, gender: "Female", contact: "646-555-0123", address: "74 Oakwood Court, Elmhurst" },
        { id: 9, name: "Noah Kim", age: 38, gender: "Male", contact: "213-555-4567", address: "101 Willow Way, Greenfield" },
        { id: 10, name: "Zoe Martinez", age: 50, gender: "Female", contact: "818-555-8901", address: "5 Palm Street, Westwood" },
        { id: 11, name: "Charlotte Davis", age: 47, gender: "Female", contact: "323-555-6789", address: "221 Oak Street, Greenfield" },
        { id: 12, name: "William Thompson", age: 52, gender: "Male", contact: "424-555-7890", address: "58 Maple Avenue, Brookside" },
    ];

    return (
        <div className="patient-details-container">
            <h2>Patient Details</h2>
            <div className="patient-details-cards-container">
                <div className="patient-details-cards">
                    {patientDetailsData.map(patient => (
                        <div className="patient-details-card" key={patient.id}>
                            <p><strong>Name:</strong> {patient.name}</p>
                            <p><strong>Age:</strong> {patient.age}</p>
                            <p><strong>Gender:</strong> {patient.gender}</p>
                            <p><strong>Contact:</strong> {patient.contact}</p>
                            <p><strong>Address:</strong> {patient.address}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PatientDetails;
