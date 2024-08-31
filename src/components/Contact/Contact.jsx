import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";

import css from "./Contact.module.css";

const Contact = ({ contact: { id, number, name }, onDelete }) => {
  return (
    <li className={css.contactListItem}>
      <div>
        <div className={css.contactListItemLine}>
          <IoIosContact />
          <span>{name}</span>
        </div>
        <div className={css.contactListItemLine}>
          <MdPhoneInTalk />
          <span>{number}</span>
        </div>
      </div>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
