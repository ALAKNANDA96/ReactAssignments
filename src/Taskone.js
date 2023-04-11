import { useState } from "react";


export default function Testone() {

  const [store, setStore] = useState(Math.floor(Math.random() * 10));
  const [array, setArray] = useState([]);
  
  const randomNum = () => {
    return Math.floor(Math.random() * 10);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          setStore(randomNum);
          setArray([...array, store]);
        }}
        style={{ display: "block" }}
      >
        Generate
      </button>
      <button
        onClick={() => {
          setArray([]);
        }}
        style={{ display: "block" }}
      >
        Clear
      </button>
      &nbsp;
      <table>
        <thead>
          <th>Random Numbers</th>
        </thead>
        <tbody>
          {array.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td>{ele}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
