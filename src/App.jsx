import ButtAuto from "./components/ButtAuto";
import ButtNumb from "./components/ButtNumb";
import ButtOper from "./components/ButtOper";
import Screen from "./components/Screen";

import { numbButtNames } from "./utils/keynames";
import { autoButtNames } from "./utils/keynames";
import { operButtNames } from "./utils/keynames";
import { useState } from "react";

export default function App() {
  const [screenValue, setScreenValue] = useState("");
  const [num1, setNum1] = useState("");
  const [operator, setOper] = useState("");

  function num1Handler(changes) {
    setScreenValue(screenValue + changes + "");
  }

  function opHandler(op) {
    if (op === "=") {
      equalHandler(operator);
    } else {
      setNum1(screenValue);
      setOper(op);
      console.log(op);
      setScreenValue("");
    }
  }

  function equalHandler(operator) {
    switch (operator) {
      case "+":
        setScreenValue(Number(num1) + Number(screenValue));
        break;
      case "-":
        setScreenValue(Number(num1) - Number(screenValue));
        break;
      case "*":
        setScreenValue(Number(num1) * Number(screenValue));
        break;
      case "/":
        setScreenValue(Number(num1) / Number(screenValue));
        break;
    }
  }

  function autoHandler(autoOperator) {
    console.log("autoHandler ajillaj baina ");
    console.log("autoOperator:", autoOperator);
    switch (autoOperator) {
      case "C":
        setScreenValue("");
        setNum1("");
        setOper("");
        break;
      case "±":
        setScreenValue(Number(screenValue) * -1);
        break;
      case "%":
        console.log("ajillaj baina");
        setScreenValue((num1 * screenValue) / 100);
        break;
    }
  }

  return (
    <div className="container">
      <Screen value={screenValue} />
      <div className="buttons">
        <div className="right">
          <div className="autoOperators">
            {autoButtNames.map((e) => (
              <ButtAuto name={e} funcAut={autoHandler} />
            ))}
          </div>
          <div className="numbers">
            {numbButtNames.map((e) => (
              <ButtNumb name={e} funcNum={num1Handler} />
            ))}
          </div>
        </div>
        <div className="operators">
          {operButtNames.map((e) => (
            <ButtOper name={e} funcOpe={opHandler} />
          ))}
        </div>
      </div>
    </div>
  );
}
