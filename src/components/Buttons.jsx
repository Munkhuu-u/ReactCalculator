import { useState } from "react";
import { numbButtNames } from "../utils/keynames";
import { autoButtNames } from "../utils/keynames";
import { operButtNames } from "../utils/keynames";
import ButtAuto from "./ButtAuto";
import ButtNumb from "./ButtNumb";
import ButtOper from "./ButtOper";
import "../styles/buttons.css";

export function Buttons() {
  return (
    <div className="buttons">
      <div className="rightDiv">
        <div className="buttons">
          {autoButtNames.map((e, index) => {
            return <ButtAuto name={e} key={index} />;
          })}
        </div>

        <div className="buttons">
          {numbButtNames.map((e, index) => {
            return <ButtNumb name={e} key={index} />;
          })}
        </div>
      </div>

      <div className="buttons">
        {operButtNames.map((e, index) => {
          return <ButtOper name={e} key={index} />;
        })}
      </div>
    </div>
  );
}
