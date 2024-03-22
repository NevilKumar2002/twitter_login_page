import React, { useState } from 'react';
import "./Style.css"

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange} className='dropdown'>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

const DateDropdowns = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className='dropdown-container'>
      <Dropdown  options={months} value={selectedMonth} placeholder="Month" onChange={handleMonthChange} className="dropdown"/>
      <Dropdown options={days} value={selectedDay} onChange={handleDayChange}className="dropdown" />
      <Dropdown options={years} value={selectedYear} onChange={handleYearChange} className="dropdown"/>
      
    </div>
  );
};

export default DateDropdowns;
