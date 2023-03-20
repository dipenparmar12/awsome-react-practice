import { useEffect, useState } from "react";

export default function App() {
  const [term, setTerm] = useState("");
  const arr = ["Apple", "bannana", "abdc", "age"];

  return (
    <div className="App">
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <div>{term}</div>
      <ul>
        {arr
          .filter((el) => {
            const test = new RegExp(`^(${term})`, "ig").test(el);
            console.log(test);
            return test;
            return true;
          })
          .map((el) => (
            <li> {el} </li>
          ))}
      </ul>
    </div>
  );
}
