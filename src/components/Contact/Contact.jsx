import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
