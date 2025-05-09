import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";



const ContactList = () => {

  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filter = useSelector((state) => state.filter.filter.name);

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  if (filteredContacts.length === 0 ){
    return <p>No contacts found</p>;
  }

  return (
    <div>
      <ul className={s.contactList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
