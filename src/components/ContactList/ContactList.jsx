import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

const ContactList = ({contact, deleteContact}) => {
    return <div>
        <ul className={css.contactList}>
            {contact.map(item => (<Contact key={item.id}
            name={item.name}
                number={item.number}
                deleteContact={deleteContact}
                id={item.id}
           />))}
        </ul>
    </div>
}

export default ContactList;