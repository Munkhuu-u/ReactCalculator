import "../styles/buttNumb.css";

export default function ButtNumb({ name, funcNum }) {
  return (
    <button
      className="number"
      onClick={(e) => {
        funcNum(e.target.innerText);
        console.log(e.target.innerText);
      }}
    >
      {name}
    </button>
  );
}
