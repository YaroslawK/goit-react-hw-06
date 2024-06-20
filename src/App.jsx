import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts, addContact, deleteContact, setContacts } from './redux/contactsSlice';
import { selectNameFilter, changeFilter } from './redux/filtersSlice';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      dispatch(setContacts(storedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (filterValue) => {
    dispatch(changeFilter(filterValue));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Provider store={store}>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addContact={handleAddContact} />
        <SearchBox value={filter} onFilter={handleFilterChange} />
        <ContactList contact={filteredContacts} deleteContact={handleDeleteContact} />
      </div>
    </Provider>
  );
}

export default App;
