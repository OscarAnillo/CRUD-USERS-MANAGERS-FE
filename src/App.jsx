//import { ContactManager } from "./Components/CRUD/CONTACT-MANAGER/ContactManager";
//import { BooksManager } from "./Components/CRUD/BOOKS/Books-Manager";

import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Components/CRUD/USERS-MANAGER/Pages/Home";
import { UsersForm } from "./Components/CRUD/USERS-MANAGER/Components/users-form";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [edit, setEdit] = useState(null);
  const navigate = useNavigate();

  const userUpdate = (id, user) => {
    const userToBeUpdated = usersData.map((item) => {
      return item.id === id ? { id, user } : item;
    });
    setUsersData(userToBeUpdated);
    setEdit("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInput) {
      return alert("User field cannot be empty.");
    }
    if (!edit) {
      setUsersData([
        ...usersData,
        {
          id: Date.now(),
          user: userInput,
        },
      ]);
      setUserInput("");
      navigate("/");
    } else {
      userUpdate(edit.id, userInput);
      navigate("/");
    }
  };

  const clickEditHandler = (id) => {
    const userToEdit = usersData.find((item) => item.id === id);
    setEdit(userToEdit);
    setUserInput("");
  };

  useEffect(() => {
    if (edit) {
      setUserInput(edit.user);
    } else {
      setUserInput("");
    }
  }, [edit]);

  const clickDeleteHandler = (id) => {
    const filteredUsers = usersData.filter((item) => item.id !== id);
    setUsersData(filteredUsers);
  };

  return (
    <div className="app">
      {/* <ContactManager /> */}
      {/* <BooksManager /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              usersData={usersData}
              clickEditHandler={clickEditHandler}
              clickDeleteHandler={clickDeleteHandler}
            />
          }
        />
        <Route
          path="/add-user"
          element={
            <UsersForm
              label="Add-User"
              action1="Submit"
              action2="Cancel"
              submitHandler={submitHandler}
              userInput={userInput}
              setUserInput={setUserInput}
            />
          }
        />
        <Route
          path="/edit-user/:id"
          element={
            <UsersForm
              label="Edit-User"
              action1="Edit"
              action2="Cancel"
              submitHandler={submitHandler}
              userInput={userInput}
              setUserInput={setUserInput}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
