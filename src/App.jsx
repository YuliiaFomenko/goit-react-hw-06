import React from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList/>
    </div>
  );
};

export default App;
