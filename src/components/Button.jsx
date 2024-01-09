import "../styles/button.css";
import Pressed from "./Pressed";

export default function Button(prop) {
  let buttonNames = prop.buttonNames;
  return (
    <>
      {buttonNames.map((event, index) => {
        return (
          <div key={index}>
            <button
              className="button"
              onClick={(e) => {
                Pressed(e.target.innerText);
              }}
            >
              {event}
            </button>
          </div>
        );
      })}
    </>
  );
}
