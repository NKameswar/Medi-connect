import React, { useState } from 'react';
import axios from 'axios';
import './Main.css';


const Main = () => {
  const [city, setCity] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [searchResults, setSearchResults] = useState(new Set()); // Use Set for distinct records
  const [errorMessage, setErrorMessage] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSpecialityChange = (e) => {
    setSpeciality(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/docout`, {
        params: {
          city: city,
          speciality: speciality,
        },
      });

      // Convert response data to Set to store distinct records
      const distinctRecords = new Set(response.data);
      setSearchResults(distinctRecords);
      setErrorMessage('');
    } catch (error) {
      // Handle any errors here
      setSearchResults(new Set()); // Clear existing results
      setErrorMessage('Error fetching data');
    }
  };

  return (
    <div className="main-container">
      <select value={city} onChange={handleCityChange}>
        <option value="">Choose City</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
      </select>

      <select value={speciality} onChange={handleSpecialityChange}>
        <option value="">Choose a Speciality</option>
        <option value="Orthopaedic">Orthopaedic</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Ophthalmologist">Ophthalmologist</option>
        <option value="Urology">Urology</option>
        <option value="Anesthesiology">Anesthesiology</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Pathology">Pathology</option>
        <option value="Gastroenterology">Gastroenterology</option>
        <option value="General Surgery">General Surgery</option>
        <option value="Gynaecologist">Gynaecologist</option>
      </select>

      <button onClick={handleSearch}>Search</button>

      <div>
        {/* Display fetched records */}
        {errorMessage && <p>{errorMessage}</p>}
        {[...searchResults].map((record) => (
          <div key={record.id} className="record-container">
          <img
            src={require(`../images/${record.doctor_name.replace(/\s/g, '_')}.jpg`)}
            alt={record.doctor_name}
            className="record-image"
          />
          <div className="record-details">
            <div>{record.city}</div>
            <div>{record.speciality}</div>
            <div>{record.doctor_name}</div>
            <div>{record.hospital_name}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Main;