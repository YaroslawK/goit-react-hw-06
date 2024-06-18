
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';
import { useEffect } from 'react';






function App() {

  const [contact, setContact] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts ? storedContacts : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

 
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const storageContact = JSON.parse(localStorage.getItem('contacts'));
    if (storageContact) {
      setContact(storageContact);
    }
  }, []);


useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }, [contact]);

   
  const addContact = (newContact) => {
    console.log(newContact);
    setContact((prevContact) => {
      return [...prevContact, newContact]
    })
  }


  const deleteContact = (id) => {
    setContact((prevContact) => {

      return prevContact.filter((contact) => contact.id !== id)
    })
  }

  const filteredContacts = contact.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );



  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contact={filteredContacts} deleteContact={deleteContact} />
    </div>
  )
}

export default App
