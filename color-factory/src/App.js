import logo from './logo.svg';
import { Switch } from "react-router"
import { BrowserRouter, NavLink, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import './App.css';
import ColorFactory from './ColorFactory';

function App() {
  // const [colors, setColors] = useState([]);
  // console.log(colors, "colors in app")

  // /** Add a circle w/newColor */
  // function addColor({color}) {
  //   setColors(colors => [
  //     ...colors,
  //     { color: color},
  //   ]);
  // }


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/colors" element={<ColorFactory />} >
            </Route>
          </Routes>


        </BrowserRouter>
    </div>
  );
}

export default App;
