import "../styles/buttAuto.css";

export default function ButtAuto({ name, funcAut }) {
  return (
    <button
      className="auto"
      onClick={() => {
        funcAut(name);
      }}
    >
      {name}
    </button>
  );
}
