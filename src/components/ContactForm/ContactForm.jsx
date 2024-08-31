import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, `Too short!`)
    .max(50, `Too Long!`)
    .required("Required!"),
  number: Yup.string()
    .min(3, `Too short!`)
    .max(50, `Too Long!`)
    .required("Required!"),
});

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formInputWrapper}>
            <label className={css.formInputLabel} htmlFor={nameId}>
              Name
            </label>
            <Field
              className={css.formInput}
              type="text"
              name="name"
              id={nameId}
            />
            <ErrorMessage
              className={css.formInputError}
              name="name"
              component="div"
            />
          </div>

          <div className={css.formInputWrapper}>
            <label className={css.formInputLabel} htmlFor={numberId}>
              Number
            </label>
            <Field
              className={css.formInput}
              type="tel"
              inputMode="tel"
              name="number"
              id={numberId}
            />
            <ErrorMessage
              className={css.formInputError}
              name="number"
              component="div"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
