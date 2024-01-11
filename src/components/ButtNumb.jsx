import "../styles/buttNumb.css";

export default function ButtNumb({ name, funcNum }) {
  return (
    <button
      className="number"
      onClick={(e) => {
        funcNum(name);
      }}
    >
      {name}
    </button>
  );
}
