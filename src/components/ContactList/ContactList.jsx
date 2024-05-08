import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li className={css.contactsItems} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
