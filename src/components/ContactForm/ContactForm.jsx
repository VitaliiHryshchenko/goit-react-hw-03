import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short! Must be at least 3 letters!")
    .max(50, "Too long! Must be no more than 50 letters!")
    .required("This field is required"),
  number: Yup.string().required("This field is required"),
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
      <Form>
        <div>
          <label htmlFor={nameFieldid}>Name </label>
          <Field type="text" name="name" id={nameFieldid} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberFieldid}>Number </label>
          <Field type="tel" name="number" id={numberFieldid} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
