import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const UsersForm = ({
  label,
  action1,
  action2,
  submitHandler,
  userInput,
  setUserInput,
  edit,
}) => {
  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor="">{label}:</label>
      <input
        type="text"
        placeholder="User Name"
        value={userInput || edit?.user}
        onChange={(e) => setUserInput(e.target.value)}
        autoFocus
      />
      <button type="submit" className="submit">
        {action1}
      </button>
      <button type="button" className="cancel">
        <Link to="/">{action2}</Link>
      </button>
    </form>
  );
};

UsersForm.propTypes = {
  label: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  submitHandler: PropTypes.func,
  userInput: PropTypes.string,
  setUserInput: PropTypes.func,
  edit: PropTypes.any,
};
