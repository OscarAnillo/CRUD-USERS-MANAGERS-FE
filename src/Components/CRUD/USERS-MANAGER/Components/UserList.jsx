import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const UserList = ({
  usersData,
  clickEditHandler,
  clickDeleteHandler,
}) => {
  return (
    <div>
      {usersData && usersData.length === 0 ? (
        <h1>No Users</h1>
      ) : (
        usersData.map((user) => (
          <div key={user.id} className="map-div">
            <p>{user.user}</p>
            <div>
              <button onClick={() => clickEditHandler(user.id)}>
                <Link to={`/edit-user/${user.id}`}>Edit</Link>
              </button>
              <button onClick={() => clickDeleteHandler(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

UserList.propTypes = {
  usersData: PropTypes.array,
  clickEditHandler: PropTypes.func,
  clickDeleteHandler: PropTypes.func,
};
