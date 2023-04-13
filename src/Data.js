import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
// "getposts form https://jsonplaceholder.typicode.com/posts",
//     "show on table",
//     "add remove button",
//     "delete post when click on remove button"

export default function Data() {
  const [data, setData] = useState([]);
  function handleDelete(ind) {
    const newData = data.filter((ele, index) => {
      return ind !== index;
    });
    setData(newData);
  }
  const fetchData = async () => {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(users.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>UserId</th>
            <th>title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{ele.userId}</td>
                <td>{ele.title}</td>
                <td
                  onClick={() => {
                    handleDelete(ind);
                  }}
                >
                  &#x274C;
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
