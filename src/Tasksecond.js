import { useState, useRef } from "react";


export default function Tasksecond() {
  const [count, setCount] = useState(0);
  const h1 = useRef(null);
  const greet = [
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night"
  ];
  return (
    <div className="App">
      <h1 ref={h1}>Hello Everyone</h1>
      <button 
        onClick={() => {
          if (count < greet.length) {
            h1.current.innerText = greet[count];
            setCount(count + 1);
          } else {
            setCount(0);
          }
        }}
      >
        Change Greet
      </button>
    </div>
  );
}
