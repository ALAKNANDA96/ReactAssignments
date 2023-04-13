import "./styles.css";
import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {};
export default function InputData() {
  // const [curr, dispatch] = useReducer(reducer, data);
  const [data, setData] = useState([]);
  const [newData, setnewData] = useState([]);
  
  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post = await data.json();
    setData(post);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (ind) => {
    const value = data.filter((ele, index) => {
      return index === ind;
    });
    setnewData([...newData, value[0]]);
  };
  return (
    <div className="App">
      <div className="first">
        {data.map((ele, ind) => {
          return (
            <div
              key={ind}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                width: "100%"
              }}
            >
              <div style={{ border: "1px solid black", width: "100%" }}>
                {ele.title}
              </div>
              <button
                onClick={() => {
                  handleChange(ind);
                }}
              >
                ➕
              </button>
            </div>
          );
        })}
      </div>
      <div className="second">
        {newData.map((ele, ind) => {
          return (
            <div
              key={ind}
              style={{
                display: "flex",
                gap: "5px",
                width: "100%",
                alignItems: "flex-start"
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  width: "100%"
                }}
              >
                {ele.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
