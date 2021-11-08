import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Color from "./Color";
import ColorForm from "./ColorForm"



function ColorFactory({}) {
  const [colors, setColors] = useState([]);

  function addColor({color}) {
    setColors(colors => [
      ...colors,
      { color: color},
    ]);
  }


  console.log(colors, "colors in colorfactory")

  const routes = <Routes>
                  {colors.map((color) => (
                    <Route path={"colors/"+color} 
                      element={
                        <Color colors={colors}/>}>
                        <Link to={"/"+color}>{color}</Link>
                    </Route>
                      ))}
                  </Routes>

// THIS NEEDS TO BE LINKS, NOT ROUTES


  return (
    <div>
      {routes}

      <ColorForm addColor={addColor}/>
    </div>
  );
}


export default ColorFactory;
