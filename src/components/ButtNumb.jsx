import "../styles/buttNumb.css";

export default function ButtNumb({ name, funcNum }) {
  return (
    <button
      // className="number name"
      className={`number ${"number" + name}`}
      onClick={(e) => {
        funcNum(name);
      }}
    >
      {name}
    </button>
  );
}
