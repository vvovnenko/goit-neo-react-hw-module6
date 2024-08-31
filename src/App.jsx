import { useEffect, useState } from "react";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import contactsData from "./data/contacts.json";

const STORAGE_CONTACTS_KEY = "app-contacts";

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(STORAGE_CONTACTS_KEY);
    return storedContacts ? JSON.parse(storedContacts) : contactsData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id),
    );
  };

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </>
  );
}

export default App;
