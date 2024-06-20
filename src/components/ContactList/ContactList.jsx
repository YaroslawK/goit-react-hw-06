import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map(item => (
          <Contact
            key={item.id}
            name={item.name}
            number={item.number}
            deleteContact={() => dispatch(deleteContact(item.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
