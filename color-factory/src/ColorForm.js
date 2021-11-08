import React, { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const ColorForm = ({ addColor }) => {
  const INITIAL_STATE = {"color": "#0b0505"};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

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

      <button>Add a new Color!</button>
    </form>
  );
};

export default ColorForm;
