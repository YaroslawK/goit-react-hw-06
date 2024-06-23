import { nanoid } from 'nanoid';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        number: "",
    };

    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^[0-9]+$/, "Must be a valid number!").required("Required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
        }));
        resetForm();
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FeedbackSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <label htmlFor="name">Name</label><br />
                <Field type="text" name="name" /><br />
                <ErrorMessage name="name" component="div" className="error" /><br />
                <label htmlFor="number">Number</label><br />
                <Field type="text" name="number" /><br />
                <ErrorMessage name="number" component="div" className="error" /><br />
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
