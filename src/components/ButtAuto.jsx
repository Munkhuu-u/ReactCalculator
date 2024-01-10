import "../styles/buttAuto.css";

export default function ButtAuto({ name }) {
  return (
    <button className="auto" onClick={(e) => {}}>
      {name}
    </button>
  );
}
