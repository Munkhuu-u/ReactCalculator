import "../styles/buttOper.css";
import React, { useState } from "react";

export default function ButtOper({ name, funcOpe, opClick, setOpClick }) {
  const [push, setPush] = useState("operator");
  return (
    <button
      className={`${(opClick, push)}`}
      onClick={(e) => {
        funcOpe(name);
        setPush(push === "operator" ? "operatorPushed" : "operator");
        setOpClick("operator");
      }}
    >
      {name}
    </button>
  );
}
