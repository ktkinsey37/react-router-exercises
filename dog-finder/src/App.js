import logo from './logo.svg';
import React from "react"
import { Switch } from "react-router"
import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList"
import DogDetails from "./DogDetails"
import Nav from "./Nav"
import './App.css';
import Duke from "./dog-pics/duke.jpg"
import Tubby from "./dog-pics/tubby.jpg"
import Perry from "./dog-pics/perry.jpg"
import Whiskey from "./dog-pics/whiskey.jpg"

const images = [Perry, Whiskey, Duke, Tubby]



function App() {
  App.defaultProps = {
    "dogs": [
      {
        "name": "Whiskey",
        "age": 5,
        "src": "./dog-pics/whiskey",
        "facts": [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        "name": "Duke",
        "age": 3,
        "src": "./dog-pics/duke",
        "facts": [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        "name": "Perry",
        "age": 4,
        "src": "./dog-pics/perry",
        "facts": [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        "name": "Tubby",
        "age": 4,
        "src": "./dog-pics/tubby",
        "facts": [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }

  const names = App.defaultProps.dogs.map(x => x.name)
  const imageSrcs = App.defaultProps.dogs.map(x => x.src)
  console.log(names, imageSrcs, "names in app")


  return (
    <div>
    <BrowserRouter>
      <Nav dogs={App.defaultProps.dogs}/>
      <Routes>
        <Route exact path="/dogs" element={<DogList names={names} imageSrcs={images}/>} >
        </Route>
        <Route path="/dogs/:name" element={<DogDetails dogs={App.defaultProps.dogs} />}>
        </Route>
        <Navigate to="/dogs" />
      </Routes>
    </BrowserRouter>

    </div>

  );
}

export default App;
