import { Field, Form, Formik } from "formik";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          className={css.formInput}
          name="name"
          placeholder="Enter contact"
        />
        <Field
          className={css.formInput}
          name="number"
          placeholder="Enter number"
        />
        <button type="sumbit">Add contact</button>
      </Form>
    </Formik>
  );
}
