import { useState } from "react";
import "./style.css";
import "../../data/users";
// import image from "../assets/like.jpg";
export function userList() {
  
  const [activeButton, setActiveButton] = useState("all");
  
    let filterUsers = users;
    if (activeButton === "women") {
      filterUsers = users.filter((user) => user.gender === "f");
    } else if (activeButton === "men") {
      filterUsers = users.filter((user) => user.gender === "m");
    } else if (activeButton === "name") {
      filterUsers = users.sort((a, b) => a.name.first-b.name.first);
    } else if (activeButton === "age") {
      filterUsers = users.sort((a, b) => a.age - b.age);
    }

    // Hier kannst du den Zustand für die gefilterten Benutzer setzen
    console.log(filterUsers);
  };

  return (
    <div className="button-container">
      <button  onClick={() => activeButton(women)}>All</button>
      <button  onClick={() => activeButton(men)}>Women</button>
      <button  onClick={() => activeButton(name)}>Men</button>
      <button  onClick={() => activeButton(age)}>Name</button>
      <button  onClick={() => activeButton(age)}>Age</button>



    </div>
  );
}
