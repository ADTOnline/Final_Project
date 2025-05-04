from flask_restful import Resource, Api, request
from package.model import conn
class Doctors(Resource):
    """This contain apis to carry out activity with all doctors"""

    def get(self):
        """Retrive list of all the doctor"""

        doctors = conn.execute("SELECT * FROM doctor ORDER BY doc_date DESC").fetchall()
        return doctors


# Code Author: Ayan
    def post(self):
        """Add the new doctor"""

        doctorInput = request.get_json(force=True)
        doc_name=doctorInput['name']
        doc_specialization = doctorInput['specialization']
        doc_exp = doctorInput['experience']
        doc_ph_no = doctorInput['contact']
        doc_address = doctorInput['clinicAddress']
        doctorInput['doc_id']=conn.execute('''INSERT INTO doctor(doc_name,doc_specialization,doc_exp,doc_ph_no,doc_address)
            VALUES(?,?,?,?)''', (doc_name, doc_specialization,doc_exp,doc_ph_no,doc_address)).lastrowid
        conn.commit()
        return doctorInput


#Code Author: Chirag
class Doctor(Resource):
    """It include all the apis carrying out the activity with the single doctor"""


    def get(self,id):
        """get the details of the docktor by the doctor id"""

        doctor = conn.execute("SELECT * FROM doctor WHERE doc_id=?",(id,)).fetchall()
        return doctor

    def delete(self, id):
        """Delete the doctor by its id"""

        conn.execute("DELETE FROM doctor WHERE doc_id=?", (id,))
        conn.commit()
        return {'msg': 'sucessfully deleted'}

    def put(self,id):
        """Update the doctor by its id"""

        doctorInput = request.get_json(force=True)
        doc_name=doctorInput['name']
        doc_specialization = doctorInput['specialization']
        doc_exp = doctorInput['experience']
        doc_ph_no = doctorInput['contact']
        doc_address = doctorInput['clinicAddress']
        doctorInput['doc_id']=conn.execute('''INSERT INTO doctor(doc_name,doc_specialization,doc_exp,doc_ph_no,doc_address)
            VALUES(?,?,?,?)''', (doc_name, doc_specialization,doc_exp,doc_ph_no,doc_address)).lastrowid
        conn.commit()
        return doctorInput