import React, { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import s from "./App.module.css";
import { nanoid } from "nanoid";

const LS_Key = "phonebookContacts";

const App = () => {
  const initialContacts = [
    {
      id: "id-1",
      name: "Rosie Simpson",
      number: "459-12-56",
    },
    {
      id: "id-2",
      name: "Hermione Kline",
      number: "443-89-12",
    },
    {
      id: "id-3",
      name: "Eden Clements",
      number: "645-17-79",
    },
    {
      id: "id-4",
      name: "Annie Copeland",
      number: "227-91-26",
    },
  ];

  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem(LS_Key);
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(LS_Key, JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const handleAddContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [
      ...prevContacts,
      newContact,
    ]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

export default App;
