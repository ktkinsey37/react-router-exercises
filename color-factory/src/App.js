import logo from "./logo.svg";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { ColorFactory } from "./ColorFactory";
import { Color } from "./Color";

function App() {
  const [colors, setColors] = useState([]);

  function addColor({ color, name }) {
    console.log(color);
    setColors((colors) => [...colors, { color, name }]);
  }

  function lookForColorByName(name) {
    console.log(colors);
    return colors.filter((colorComponent) => {
      console.log(colorComponent.name == name);
      return colorComponent.name == name;
    })[0];
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/colors"
            element={<ColorFactory colors={colors} addColor={addColor} />}
          ></Route>
          <Route
            exact
            path="/colors/:name"
            element={<Color lookForColorByName={lookForColorByName} />}
          ></Route>
          <Route path="*" element={<Navigate to="/colors" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
