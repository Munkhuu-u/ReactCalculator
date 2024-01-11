import "../styles/buttOper.css";

export default function ButtOper({ name, funcOpe }) {
  return (
    <button
      className="operator"
      onClick={(e) => {
        funcOpe(name);
      }}
    >
      {name}
    </button>
  );
}
