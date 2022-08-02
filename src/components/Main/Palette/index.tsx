import React, { useState } from "react";

import PaletteStyles from "./styles";

const colors = [
  "0564A4",
  "0C8FF1",
  "0ABAFA",
  "0BB8AA",
  "00B873",
  "DDBC10",
  "FCF7BD",
  "FF705D",
  "F8003C",
  "BE0A19",
  "B90F8B",
  "F56ED8",
  "7E45F7",
  "4A40EE",
  "94959F",
  "7B7168",
];

function Palette() {
  const [customColor, setCustomColor] = useState("008FFD");

  const handleSelectColor = (color: string, e?: React.FormEvent) => {
    console.log(color);
  };

  return (
    <PaletteStyles>
      <h3>Color</h3>
      <div className="colors">
        <ul>
          {colors.map((color) => (
            <li key={color} onClick={() => handleSelectColor(color)}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="1.25"
                  y="1.25"
                  width="12.5"
                  height="12.5"
                  rx="6.25"
                  stroke={`#${color}`}
                  fill={`#${color}`}
                  strokeWidth="2.5"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
      <div className="custom-wrapper">
        <h3>Custom color</h3>
        <div className="custom-color">
          <form noValidate onSubmit={(e) => handleSelectColor(customColor, e)}>
            <span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="1.25"
                  y="1.25"
                  width="12.5"
                  height="12.5"
                  rx="6.25"
                  stroke={customColor ? `#${customColor}` : "#008FFD"}
                  fill={customColor ? `#${customColor}` : "#008FFD"}
                  strokeWidth="2.5"
                />
              </svg>
            </span>
            <input type="text" placeholder={"008FFD"} onChange={(e) => setCustomColor(e.target.value)} />
          </form>
        </div>
      </div>
    </PaletteStyles>
  );
}

export default Palette;
