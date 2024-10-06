import "./App.css";
import { useState } from "react";
import { users } from "./data/users";

function App() {
  const [button, setButton] = useState("all");

  let filterUsers = users;
  if (button === "women") {
    filterUsers = users.filter((user) => user.gender === "female");
  } else if (button === "men") {
    filterUsers = users.filter((user) => user.gender === "male");
  } else if (button === "name") {
    filterUsers = users.sort((a, b) => a.name.first - b.name.first);
  } else if (button === "age") {
    filterUsers = users.sort((a, b) => a.dob.age - b.dob.age);
  }

  return (
    <>
      <button className="buttonContainer" onClick={() => setButton("women")}>
        Women
      </button>
      <button className="buttonContainer" onClick={() => setButton("men")}>
        Men
      </button>
      <button className="buttonContainer" onClick={() => setButton("age")}>
        By Age
      </button>
      <button className="buttonContainer" onClick={() => setButton("name")}>
        By Name
      </button>
      <button className="buttonContainer" onClick={() => setButton("all")}>
        All
      </button>

      <ul>
        {filterUsers.map((user, index) => (
          <li key={index}>
            {user.name.first}, {user.gender}, {user.dob.age},
            <img src={user.picture.thumbnail}></img>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
