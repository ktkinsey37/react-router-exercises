import React from "react";

function Color({id, color}) {

  // console.log(props, props.box.color, "THIS IS THE LINE THAT IS BOTH LOGGING AND THROWING?")

  return (
    <div>
          <div
        className="color"
        key={id}
        style={{
          backgroundColor: `${color}`,
          position: "relative",
          height: `100%`,
          width: `100%`
        }}
      >
      </div>
    </div>

  );
}

export default Color;