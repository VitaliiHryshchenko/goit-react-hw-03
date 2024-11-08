import * as yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";

const ContactFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too short! Must be at least 3 letters!")
    .max(50, "Too long! Must be no more than 50 letters!")
    .required("This field is required"),
  number: yup
    .string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "The phone number must be in the format 111-11-11"
    )
    .required("This field is required"),
});
const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldid = useId();
  const numberFieldid = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.fieldWrap}>
          <label htmlFor={nameFieldid}>Name </label>
          <Field className={s.field} type="text" name="name" id={nameFieldid} />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className={s.fieldWrap}>
          <label htmlFor={numberFieldid}>Number </label>
          <Field
            className={s.field}
            type="tel"
            name="number"
            id={numberFieldid}
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
