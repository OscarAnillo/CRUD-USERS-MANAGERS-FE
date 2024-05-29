import { useState, useEffect } from "react";

/* Components */
import { BooksInputs } from "./books-inputs";
import { BookList } from "./books-list";

export const BooksManager = () => {
  const [userInput, setUserInput] = useState({
    book: "",
    author: "",
  });
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(null);

  const dataUpdate = (id, book, author) => {
    const itemToEdit = data.map((item) => {
      return item.id === id ? { id, book, author } : item;
    });
    setData(itemToEdit);
    setEditing("");
  };

  /* Create */
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!userInput.book || !userInput.author) {
      return alert("Need to add a book and an author.");
    }
    if (!editing) {
      setData([
        ...data,
        {
          id: Date.now(),
          book: userInput.book,
          author: userInput.author,
        },
      ]);
      setUserInput({
        book: "",
        author: "",
      });
    } else {
      dataUpdate(editing.id, userInput.book, userInput.author);
    }
  };

  /* Update */
  const clickEditHandler = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditing(itemToEdit);
  };

  useEffect(() => {
    if (editing) {
      setUserInput({
        book: editing.book,
        author: editing.author,
      });
    } else {
      setUserInput({
        book: "",
        author: "",
      });
    }
  }, [editing]);

  /* Delete */
  const clickDeleteHandler = (id) => {
    const filteredData = data.filter((d) => d.id !== id);
    setData(filteredData);
    setUserInput({
      book: "",
      author: "",
    });
  };

  return (
    <div>
      <h1>Books Stall</h1>
      <BooksInputs
        userInput={userInput}
        setUserInput={setUserInput}
        onSubmitHandler={onSubmitHandler}
        editing={editing}
      />
      <BookList
        data={data}
        clickEditHandler={clickEditHandler}
        clickDeleteHandler={clickDeleteHandler}
      />
    </div>
  );
};
