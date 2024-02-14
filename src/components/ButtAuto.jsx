import "../styles/buttAuto.css";

export default function ButtAuto({ name, funcAut }) {
  return (
    <button
      className="auto"
      // className={`auto ${name}`}
      onClick={() => {
        funcAut(name);
      }}
    >
      {name}
    </button>
  );
}
