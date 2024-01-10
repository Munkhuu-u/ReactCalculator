import "../styles/buttOper.css";

export default function ButtOper({ name }) {
  return (
    <button className="operator" onClick={(e) => {}}>
      {name}
    </button>
  );
}
