import React from "react";
import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.contact}>
      <li>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </li>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
