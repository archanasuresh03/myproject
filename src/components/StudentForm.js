import React, { useState } from 'react';
import { department_options } from '../functions';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    age: '',
    admissionId: '',
    departmentName: ''
  });

  // Handler function for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Save all data to sessionStorage as a single field
  const saveData = (e) => {
    e.preventDefault();
    sessionStorage.setItem('studentFormData', JSON.stringify(formData));
    alert('Data saved successfully!');
  };

  return (
    <div className="form-container">
      <form onSubmit={saveData}>
        <div className="form-title">
          <h1>Student Registration</h1>
        </div>

        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            minLength="2"
            placeholder="Enter your first name"
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            minLength="2"
            placeholder="Enter your last name"
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </label>
        <br />

        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            min="1"
            max="120"
            placeholder="Enter your age"
          />
        </label>
        <br />

        <label>
          Admission ID:
          <input
            type="text"
            name="admissionId"
            value={formData.admissionId}
            onChange={handleInputChange}
            required
            pattern="[A-Za-z0-9]{6,10}"
            placeholder="Enter Admission ID (e.g., A12345)"
          />
        </label>
        <br />

        <label>
          Department Name:
          <select
            name="departmentName"
            value={formData.departmentName}
            onChange={handleInputChange}
            required
          >
            {department_options.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default StudentForm;
