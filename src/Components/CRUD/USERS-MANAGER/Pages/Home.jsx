import { Heading } from "../Components/Heading";
import { UserList } from "../Components/UserList";
import PropTypes from "prop-types";

export const Home = ({ usersData, clickEditHandler, clickDeleteHandler }) => {
  return (
    <>
      <Heading />
      <UserList
        usersData={usersData}
        clickEditHandler={clickEditHandler}
        clickDeleteHandler={clickDeleteHandler}
      />
    </>
  );
};

Home.propTypes = {
  usersData: PropTypes.array,
  clickEditHandler: PropTypes.func,
  clickDeleteHandler: PropTypes.func,
};
