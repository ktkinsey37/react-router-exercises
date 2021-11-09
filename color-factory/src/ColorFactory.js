import React, { useState } from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Color from "./Color";
import ColorForm from "./ColorForm";

function ColorFactory({ colors, addColor }) {
  return (
    <div>
      <ul>
        {colors.map(({ name }) => (
          <li>
            <Link to={"/colors/" + name}>{name}</Link>
          </li>
        ))}
      </ul>

      <ColorForm addColor={addColor} />
    </div>
  );
}

export { ColorFactory };
