import React, { useState } from "react";

export default function Input() {
  const [elem, setEle] = useState([]);
  const [array, setArray] = useState([]);
  const [details, setDetails] = useState({ name: "" });
  const input = React.createElement("input", {
    type: "text",
    name: "name",
    onChange: (e) => {
      setDetails({ ...details, name: e.target.value });
    }
  });
  const but = React.createElement(
    "button",
    {
      onClick: () => {
        setArray([...array, details]);
      }
    },
    "submit"
  );
  return (
    <div className="App">
      {elem.map((ele, ind) => {
        return (
          <div key={ind} style={{}}>
            {ele}
          </div>
        );
      })}
      <button
        onClick={() => {
          setEle([...elem, input]);
        }}
      >
        Add
      </button>
      {but}
      <div
        style={{
          display: "flex",
          flexDirection: "columns",
          justifyContent: "center",
        }}
      >
        <table>
          {array.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td>{ele.name}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
