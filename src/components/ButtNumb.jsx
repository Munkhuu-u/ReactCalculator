import "../styles/button.css";

export default function ButtNumb({ name, setScreenValue }) {
  return (
    <button
      className="button"
      onClick={(e) => {
        setScreenValue(e.target.innerText);
      }}
    >
      {name}
    </button>
  );
}
