// pages/index.js
import { useState } from 'react';


const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Book an Appointment with a Dietitian</h1>
      {submitted ? (
        <div className="successMessage">
          <p>Form submitted successfully!</p>
        </div>
      ) : (
        <form className="appointmentForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          /><br /><br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          /><br /><br />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          /><br /><br />

          <label htmlFor="date">Preferred Appointment Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          /><br /><br />

          <label htmlFor="time">Preferred Appointment Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          /><br /><br />

          <label htmlFor="comments">Additional Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={4}
            cols={50}
          />

          <input type="submit" value="Submit Appointment" />
        </form>
      )}
    </div>
  );
};

export default Appointment;
