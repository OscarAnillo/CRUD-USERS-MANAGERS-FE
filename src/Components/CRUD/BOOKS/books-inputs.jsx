import PropTypes from "prop-types";

export const BooksInputs = ({
  userInput,
  setUserInput,
  onSubmitHandler,
  editing,
}) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };
  const { book, author } = userInput;

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Book title"
        value={book}
        name="book"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Author name"
        value={author}
        name="author"
        onChange={changeHandler}
      />
      <button type="submit">{!editing ? "Add Book" : "OK"}</button>
    </form>
  );
};

BooksInputs.propTypes = {
  userInput: PropTypes.object,
  setUserInput: PropTypes.func,
  onSubmitHandler: PropTypes.func,
  editing: PropTypes.any,
};
