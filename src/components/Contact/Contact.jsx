import { HiUser, HiPhone } from "react-icons/hi2";
import s from "./Contact.module.css";
const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div>
      <p>
        <HiUser />
        {name}
      </p>
      <p>
        <HiPhone />
        {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
