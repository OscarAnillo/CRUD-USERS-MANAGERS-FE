import { useEffect, useState } from "react";

/* Components */
import { ContactInputs } from "./Contact-inputs";
import { ContactList } from "./Contact-list";

export const ContactManager = () => {
  const [userInput, setUserInput] = useState("");
  const [contactsData, setContactsData] = useState([]);
  const [editContact, setEditContact] = useState(null);

  function contactUpdate(id, name) {
    const contactToUpdate = contactsData.map((contact) => {
      return contact.id === id ? { id, name } : contact;
    });
    setContactsData(contactToUpdate);
    setEditContact(null);
  }

  /* Create */
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!userInput) {
      return alert("You need to add a contact.");
    }
    if (!editContact) {
      setContactsData([
        ...contactsData,
        {
          id: Date.now(),
          name: userInput,
        },
      ]);
      setUserInput("");
    } else {
      contactUpdate(editContact.id, userInput);
    }
  };

  /* update */
  const clickEditHandler = (id) => {
    const contactToUpdate = contactsData.find((contact) => contact.id === id);
    setEditContact(contactToUpdate);
  };

  useEffect(() => {
    if (editContact) {
      setUserInput(editContact.name);
    } else {
      setUserInput("");
    }
  }, [editContact]);

  /* Delete */
  const clickDeleteHandler = (id) => {
    const filteredContacts = contactsData.filter(
      (contact) => contact.id !== id
    );
    setContactsData(filteredContacts);
    setUserInput("");
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactInputs
        userInput={userInput}
        setUserInput={setUserInput}
        onSubmitHandler={onSubmitHandler}
        editContact={editContact}
      />
      <ContactList
        contactsData={contactsData}
        clickDeleteHandler={clickDeleteHandler}
        clickEditHandler={clickEditHandler}
      />
    </div>
  );
};
