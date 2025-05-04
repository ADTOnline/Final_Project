from flask import Flask, request, jsonify

app = Flask(__name__)

# Define a dictionary to store scheduled appointments
# Code Author: Chirag
appointments = []

@app.route('/schedule-appointment', methods=['POST'])
def schedule_appointment():
    # Extract appointment details from the request
    data = request.json
    name = data.get('name')
    date = data.get('date')
    time = data.get('time')

    # Perform validation
    if not name or not date or not time:
        return jsonify({'error': 'Incomplete data provided'}), 400

    # Save the appointment
    appointment = {'name': name, 'date': date, 'time': time}
    appointments.append(appointment)

    return jsonify({'message': 'Appointment scheduled successfully'}), 201

@app.route('/appointments', methods=['GET'])
def get_appointments():
    return jsonify(appointments)

if __name__ == '__main__':
    app.run(debug=True)
