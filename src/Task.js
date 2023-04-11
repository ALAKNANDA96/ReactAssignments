import { useState } from "react";


export default function Task() {
  const [data, setData] = useState({ time: "", event: "" });
  const [array, setArray] = useState([]);
  console.log(array);
  return (
    <div>
      <div>
        <h1
          onMouseOver={(e) => {
            e.preventDefault();
            setData({
              ...data,
              time: new Date().toLocaleTimeString(),
              event: e.type
            });
            setArray([...array, data]);
          }}
          onMouseLeave={(e) => {
            e.preventDefault();
            setData({
              ...data,
              time: new Date().toLocaleTimeString(),
              event: e.type
            });
            setArray([...array, data]);
          }}
        >
          Heading first
        </h1>
        <h1>Heading Second</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {array.slice(1, array.length - 1).map((ele, ind) => {
              return (
                <tr key={ind}>
                  <td>{ele.time}</td>
                  <td>{ele.event}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
