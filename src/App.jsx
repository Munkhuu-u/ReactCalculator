import { Buttons } from "./components/Buttons";
import Screen from "./components/Screen";
import { useState } from "react";

export default function App() {
  const [screen, setScreenValue] = useState("");

  return (
    <div className="container">
      <Screen value={screen} />
      <Buttons />
    </div>
  );
}
