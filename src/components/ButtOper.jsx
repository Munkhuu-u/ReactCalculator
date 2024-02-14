import "../styles/buttOper.css";
// import React, { useState } from "react";

export default function ButtOper({ name, funcOpe, opClick, setOpClick }) {
  // const [push, setPush] = useState("operator");
  return (
    <button
      className={`${opClick}`}
      onClick={(e) => {
        funcOpe(name);
        // setOpClick(opClick === "operator" ? "operatorPushed" : "operator");
      }}
    >
      {name}
    </button>
  );
}
