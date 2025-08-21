import React, { useState } from 'react'
import './Appointment.css'
const Appointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Appointment Scheduled for ${name} on ${date} at ${time}`);
      setName('');
      setEmail('');
      setDate('');
      setTime('');
      setDescription('');
  };
  return (
    <div className="appointment-container">
         <h2>Schedule an Appointment</h2>
         <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Schedule Appointment</button>
            </form>
        </div>
  )
}

export default Appointment