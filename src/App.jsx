import ButtAuto from "./components/ButtAuto";
import ButtNumb from "./components/ButtNumb";
import ButtOper from "./components/ButtOper";
import Screen from "./components/Screen";

import { numbButtNames } from "./utils/keynames";
import { autoButtNames } from "./utils/keynames";
import { operButtNames } from "./utils/keynames";
import { useState } from "react";

export default function App() {
  const [screen, setScreenValue] = useState("");

  function addNum(changes) {
    setScreenValue(screen + changes);
  }
  return (
    <div>
      <Screen value={screen} />
      <div className="container">
        <div className="right">
          <div className="autoOperators">
            {autoButtNames.map((e) => {
              return <ButtAuto name={e} />;
            })}
          </div>
          <div className="numbers">
            {numbButtNames.map((e) => {
              return <ButtNumb name={e} func={addNum} />;
            })}
          </div>
        </div>
        <div className="operators">
          {operButtNames.map((e) => {
            return <ButtOper name={e} />;
          })}
        </div>
      </div>
    </div>
  );
}
