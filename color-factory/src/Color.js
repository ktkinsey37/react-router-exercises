import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Link
} from "react-router-dom";

function Color({ lookForColorByName }) {
  // try{
  //   console.log(lookForColorByName(name).color)
  // } catch {
  //   throw new Error("Color needs to be defined first")
  // }

  let { name } = useParams();
  let [color, setColor] = useState("");
  console.log(lookForColorByName(name));
  useEffect(() => {
    setColor(lookForColorByName(name).color);
  }, []);
  return (
    <div>
      <div
        className="color"
        style={{
          backgroundColor: color,
          position: "relative",
          height: `500px`,
          width: `500px`,
        }}
      >
        {color}
      </div>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export { Color };
