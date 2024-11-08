import { HiUser, HiPhone } from "react-icons/hi2";
import s from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={s.box}>
      <div>
        <p className={s.text}>
          <HiUser className={s.icon} />
          {name}
        </p>
        <p>
          <HiPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button className={s.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
