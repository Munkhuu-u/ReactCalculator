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
  const [num2, setNum2] = useState("");
  const [operator, setOper] = useState("");
  const [opClick, setOpClick] = useState("operator");
  // const [opChanged, setOpChanged] = useState("");

  function numHandler(changes) {
    if (operator == "" && num2 == "") {
      setScreenValue(screenValue + changes + "");
      console.log(
        "screenValue: ",
        screenValue,
        "\n",
        "num1: ",
        num1,
        "\n",
        "num2: ",
        num2,
        "\n",
        "ope: ",
        operator
      );
    } else if (operator != "" && num2 == "") {
      setScreenValue(changes);
      setNum2(changes);
    } else {
      setScreenValue(screenValue + changes + "");
      setNum2(screenValue + changes + "");
    }
  }

  function opHandler(op) {
    if (op === "=") {
      equalHandler(operator);
    } else {
      equalHandler(operator);
      setNum1(screenValue);
      setOper(op);
    }
  }

  function equalHandler(operator) {
    switch (operator) {
      case "+":
        setScreenValue(
          Math.round((Number(num1) + Number(num2)) * 10000000) / 10000000
        );
        setNum1(Number(num1) + Number(num2));
        setNum2("");
        console.log(
          "screenValue: ",
          screenValue,
          "\n",
          "num1: ",
          num1,
          "\n",
          "num2: ",
          num2,
          "\n",
          "ope: ",
          operator
        );
        break;
      case "-":
        setScreenValue(
          Math.round((Number(num1) - Number(num2)) * 10000000) / 10000000
        );
        setNum1(Number(num1) - Number(num2));
        setNum2("");
        console.log(
          "screenValue: ",
          screenValue,
          "\n",
          "num1: ",
          num1,
          "\n",
          "num2: ",
          num2,
          "\n",
          "ope: ",
          operator
        );
        break;
      case "*":
        setScreenValue(
          Math.round(Number(num1) * Number(num2) * 10000000) / 10000000
        );
        setNum1(Number(num1) * Number(num2));
        setNum2("");
        break;
      case "/":
        setScreenValue(
          Math.round((Number(num1) / Number(num2)) * 10000000) / 10000000
        );
        setNum1(Number(num1) / Number(num2));
        setNum2("");
        break;
    }
  }

  function autoHandler(autoOperator) {
    console.log("autoOperator:", autoOperator);
    switch (autoOperator) {
      case "C":
        setScreenValue("");
        setNum1("");
        setNum2("");
        setOper("");
        break;
      case "±":
        setScreenValue(Number(screenValue) * -1);
        setNum1(Number(screenValue) * -1);
        break;
      case "%":
        console.log(
          "screenValue: ",
          screenValue,
          "\n",
          "num1: ",
          num1,
          "\n",
          "num2: ",
          num2,
          "\n",
          "ope: ",
          operator
        );
        setScreenValue(screenValue / 100);
        setNum1(screenValue / 100);
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
              <ButtNumb name={e} funcNum={numHandler} />
            ))}
          </div>
        </div>
        <div className="operators">
          {operButtNames.map((e) => (
            <ButtOper
              name={e}
              funcOpe={opHandler}
              opClick={opClick}
              setOpClick={setOpClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
