from flask_restful import Resource, Api, request
import sys
sys.path.append('/path/to/parent/directory')
from package.model import conn

# Code Author: Ayan
class Patients(Resource):
    """It contain all the api carryign the activity with aand specific patient"""

    def get(self):
        """Api to retive all the patient from the database"""

        patients = conn.execute("SELECT * FROM patient  ORDER BY pat_date DESC").fetchall()
        return patients


# Code Author: Ayan
    def post(self):
        """api to add the patient in the database"""

        patientInput = request.get_json(force=True)
        pat_name=patientInput['name']
        pat_age = patientInput['age']
        pat_gender = patientInput['gender']
        pat_contact = patientInput['contact']
        pat_address = patientInput['pat_address']
        patientInput['pat_id']=conn.execute('''INSERT INTO patient(pat_name,pat_age,pat_gender,pat_contact,pat_address)
            VALUES(?,?,?,?,?)''', (pat_name, pat_age, pat_gender,pat_contact,pat_address)).lastrowid
        conn.commit()
        return patientInput


#Code Author: Chirag
class Patient(Resource):
    """It contains all apis doing activity with the single patient entity"""

    def get(self,id):
        """api to retrive details of the patient by it id"""

        patient = conn.execute("SELECT * FROM patient WHERE pat_id=?",(id,)).fetchall()
        return patient

    def delete(self,id):
        """api to delete the patiend by its id"""

        conn.execute("DELETE FROM patient WHERE pat_id=?",(id,))
        conn.commit()
        return {'msg': 'sucessfully deleted'}

    def put(self,id):
        """api to update the patient by it id"""

        patientInput = request.get_json(force=True)
        pat_name=patientInput['name']
        pat_age = patientInput['age']
        pat_gender = patientInput['gender']
        pat_contact = patientInput['contact']
        pat_address = patientInput['pat_address']
        patientInput['pat_id']=conn.execute('''INSERT INTO patient(pat_name,pat_age,pat_gender,pat_contact,pat_address)
            VALUES(?,?,?,?,?)''', (pat_name, pat_age, pat_gender,pat_contact,pat_address)).lastrowid
        conn.commit()
        return patientInput