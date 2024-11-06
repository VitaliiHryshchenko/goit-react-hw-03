import { HiUser, HiPhone } from "react-icons/hi2";
import s from "./Contact.module.css";
const Contact = ({ contact: { id, name, number } }) => {
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
      <button type="button">Delete</button>
    </div>
  );
};

export default Contact;
