import { nanoid } from 'nanoid';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
    const initialValues = {
        name: "",
        number: "",
    }

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^[0-9]+$/, "Must be a valid number!").required("Required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
        >
                <Form>
                    <label htmlFor="name">Name</label><br />
                    <Field type="text" name="name"/><br />
                    <ErrorMessage name="name" component="div" className="error"/><br />
                    <label htmlFor="number">Number</label><br />
                    <Field type="text" name="number"/><br />
                    <ErrorMessage name="number" component="div" className="error"/><br />
                    <button type="submit">Add contact</button>
                </Form>
        </Formik>
    );
}

export default ContactForm;
