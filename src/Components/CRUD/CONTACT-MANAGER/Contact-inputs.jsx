import PropTypes from "prop-types";

export const ContactInputs = ({
  userInput,
  setUserInput,
  onSubmitHandler,
  editContact,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Add your contacts"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        autoFocus
      />
      <button type="submit">{editContact ? "OK" : "Add"}</button>
    </form>
  );
};

ContactInputs.propTypes = {
  userInput: PropTypes.string,
  setUserInput: PropTypes.func,
  onSubmitHandler: PropTypes.func,
  editContact: PropTypes.object,
};
