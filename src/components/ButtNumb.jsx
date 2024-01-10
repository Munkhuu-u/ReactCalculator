import "../styles/buttNumb.css";

export default function ButtNumb({ name, func }) {
  return (
    <button
      className="number"
      onClick={(e) => {
        func(e.target.innerText);
      }}
    >
      {name}
    </button>
  );
}
