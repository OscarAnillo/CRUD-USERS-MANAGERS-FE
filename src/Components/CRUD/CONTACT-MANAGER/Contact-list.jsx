import PropTypes from "prop-types";

export const ContactList = ({
  contactsData,
  clickDeleteHandler,
  clickEditHandler,
}) => {
  return (
    <div>
      {contactsData.map((contact) => (
        <div key={contact.id} className="map-div">
          <li>{contact.name}</li>
          <div>
            <button onClick={() => clickEditHandler(contact.id)}>Edit</button>
            <button onClick={() => clickDeleteHandler(contact.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contactsData: PropTypes.array,
  clickDeleteHandler: PropTypes.func,
  clickEditHandler: PropTypes.func,
};
