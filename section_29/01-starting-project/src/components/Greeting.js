import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false)

  const changeTextHandler = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>good to see you!</Output>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}
