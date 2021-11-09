import React, { useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { v4 as uuid } from "uuid";



const ColorForm = ({ addColor }) => {
  const INITIAL_STATE = { color: "#0b0505" };
  const [formData, setFormData] = useState(INITIAL_STATE);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        placeholder="Color"
      />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="name"
      />
      <button>Add the color name!</button>
    </form>
  );
};

export default ColorForm;
