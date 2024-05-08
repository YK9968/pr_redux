import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>HTTP</h1>
      <ContactForm />
      {error && <Error />}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
}
