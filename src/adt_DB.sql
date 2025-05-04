-- Create database
CREATE DATABASE IF NOT EXISTS medical_records;

-- Use database
USE medical_records;

-- Create tables
CREATE TABLE IF NOT EXISTS patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age INT,
    gender VARCHAR(10),
    blood_type VARCHAR(5),
    medical_condition VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS admissions (
    admission_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    admission_date DATE,
    discharge_date DATE,
    room_number INT,
    admission_type VARCHAR(20),
    doctor VARCHAR(255),
    hospital VARCHAR(255),
    insurance_provider VARCHAR(255),
    billing_amount DECIMAL(10, 2),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

CREATE TABLE IF NOT EXISTS medications (
    medication_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    medication_name VARCHAR(255),
    dosage VARCHAR(50),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

CREATE TABLE IF NOT EXISTS test_results (
    result_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    test_date DATE,
    test_name VARCHAR(255),
    result VARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

-- Insert sample data
INSERT INTO patients (first_name, last_name, age, gender, blood_type, medical_condition)
VALUES ('Mark', 'Anderson', 20, 'Male', 'O+', 'Diabetes'),
       ('Sara', 'Nguyen', 42, 'Female', 'A-', 'Asthma');

INSERT INTO admissions (patient_id, admission_date, discharge_date, room_number, admission_type, doctor, hospital, insurance_provider, billing_amount)
VALUES (1, '2022-01-15', '2022-01-20', 101, 'Emergency', 'Dr. Patel', 'General Hospital', 'Medicare', 5000.00),
       (2, '2022-02-20', '2022-02-25', 102, 'Elective', 'Dr. Singh', 'City Hospital', 'UnitedHealthcare', 6000.00);

INSERT INTO medications (patient_id, medication_name, dosage, start_date, end_date)
VALUES (1, 'Insulin', '10 units', '2022-01-15', '2022-01-20'),
       (2, 'Ventolin', '2 puffs', '2022-02-20', '2022-02-25');

INSERT INTO test_results (patient_id, test_date, test_name, result)
VALUES (1, '2022-01-18', 'Blood Sugar', 'Normal'),
       (2, '2022-02-22', 'Lung Function Test', 'Abnormal');

-- Create views
CREATE VIEW patient_info AS
SELECT p.patient_id, p.first_name, p.last_name, p.age, p.gender, p.blood_type, p.medical_condition,
       a.admission_id, a.admission_date, a.discharge_date, a.room_number, a.admission_type, a.doctor,
       a.hospital, a.insurance_provider, a.billing_amount,
       m.medication_id, m.medication_name, m.dosage, m.start_date AS medication_start_date, m.end_date AS medication_end_date,
       tr.result_id, tr.test_date, tr.test_name, tr.result
FROM patients p
LEFT JOIN admissions a ON p.patient_id = a.patient_id
LEFT JOIN medications m ON p.patient_id = m.patient_id
LEFT JOIN test_results tr ON p.patient_id = tr.patient_id;

-- Add constraints
ALTER TABLE patients
ADD CONSTRAINT fk_admissions_patient
FOREIGN KEY (patient_id) REFERENCES admissions(patient_id);

ALTER TABLE medications
ADD CONSTRAINT fk_medications_patient
FOREIGN KEY (patient_id) REFERENCES patients(patient_id);

ALTER TABLE test_results
ADD CONSTRAINT fk_test_results_patient
FOREIGN KEY (patient_id) REFERENCES patients(patient_id);

-- Removing null values from the tables in the database

-- Remove rows with NULL values from the Patients table
DELETE FROM patients WHERE first_name OR last_name IS NULL 
OR age IS NULL OR gender IS NULL OR blood_type OR medical_condition IS NULL;

-- Remove rows with NULL values from the medications table
DELETE FROM medications WHERE admission_date IS NULL OR
discharge_date IS NULL OR room_number IS NULL OR admission_type
IS NULL OR doctor IS NULL OR hospital IS NULL OR insurance_provider
IS NULL OR billing_amount;

-- Remove rows with NULL values from the Doctors table
DELETE FROM test_results WHERE result_id IS NULL OR patient_id IS NULL OR
test_date IS NULL OR test_name IS NULL OR result;

-- Adding uniqueness and adding constraints with respect to formatting to the database

-- Added unique constraint to patients' first_name and last_name
ALTER TABLE patients ADD CONSTRAINT uc_patient_names UNIQUE (first_name, last_name);

-- Added constraint to ensure age is positive
ALTER TABLE patients ADD CONSTRAINT chk_positive_age CHECK (age > 0);

-- Added unique constraint to admissions' room_number within each hospital
ALTER TABLE admissions ADD CONSTRAINT uc_room_number_per_hospital UNIQUE (hospital, room_number);

-- Added constraint to ensure admission_type is one of the specified values
ALTER TABLE admissions ADD CONSTRAINT chk_admission_type CHECK (admission_type IN ('Emergency', 'Elective', 'Urgent'));

-- Added constraint to ensure billing_amount is positive
ALTER TABLE admissions ADD CONSTRAINT chk_positive_billing_amount CHECK (billing_amount > 0);

-- Added unique constraint to medications' medication_name within each patient
ALTER TABLE medications ADD CONSTRAINT uc_medication_name_per_patient UNIQUE (patient_id, medication_name);

-- Added constraint to ensure dosage is in a specific format
ALTER TABLE medications ADD CONSTRAINT chk_dosage_format CHECK (dosage LIKE '[0-9]+ [a-zA-Z]+');

-- Added unique constraint to test_results' test_name within each patient
ALTER TABLE test_results ADD CONSTRAINT uc_test_name_per_patient UNIQUE (patient_id, test_name);

-- Added constraint to ensure result is one of the specified values
ALTER TABLE test_results ADD CONSTRAINT chk_result CHECK (result IN ('Normal', 'Abnormal', 'Inconclusive'));
