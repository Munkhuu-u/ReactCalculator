import Button from "./Button";
import { buttonsArr } from "../utils/keynames";
import "../styles/buttons.css";

export default function Buttons() {
  return (
    <div className="buttons">
      <Button buttonNames={buttonsArr} />
    </div>
  );
}
