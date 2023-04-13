import './App.css';
import { useState, useRef } from "react";

export default function Task() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [array, setArray] = useState([]);
  const refernce = useRef();
  const handleChange = (e) => {
    e.preventDefault();
    setArray([...array, data]);
  };
  const handleDelete = (ind) => {
    const newArray = array.filter((ele, index) => {
      return ind !== index;
    });
    setArray(newArray);
  };
  const handleUpdate = (ind, e) => {

    for (let i = 0; i < array.length; i++) {
      if (ind === i) {
        setData({ ...data, [e.target.name]: e.target.value });
        array.splice(ind, 1);
      }
    }
    setArray([...array, data]);
  };
  return (
    <div className="App">
      <div className="section1">
        <form className="forms" onSubmit={handleChange}>
          <input
            type="text"
            placeholder="Name.."
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, name: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Password.."
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, password: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              handleChange(e);
            }}
          >
            Submit
          </button>
        </form>
        <div className="sec2">
          <span>
            Hello My name is {data.name} and email is {data.email} and password
            is {data.password}
          </span>
        </div>
      </div>
      <div className="section2">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {array.map((ele, ind) => {
              return (
                <tr key={ind} ref={refernce}>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.password}</td>
                  <td
                    onClick={() => {
                      handleDelete(ind);
                    }}
                  >
                    Delete
                  </td>
                  <td
                    onClick={(e) => {
                      handleUpdate(ind, e);
                    }}
                  >
                    Update
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
