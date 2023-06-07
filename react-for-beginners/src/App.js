import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, SetKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => SetKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API.....");
  }, []);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;