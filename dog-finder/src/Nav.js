import React from "react";
import { NavLink } from "react-router-dom";
// import "./NavBar.css";

function Nav({dogs}) {

    const dogsNavbar = dogs.map(dog=>       <NavLink exact to={"dogs/"+dog.name} >
    | {dog.name} |
  </NavLink>)

  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">
        Dogs |
      </NavLink>
      {dogsNavbar}
    </nav>
  );
}

export default Nav;
