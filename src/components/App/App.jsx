import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import initialcontacts from "../../components/contacts.json";
import s from "./App.module.css";

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialcontacts;
};
const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchByName.toLowerCase())
  );

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchByName} onSearch={setSearchByName} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
