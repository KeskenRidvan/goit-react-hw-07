import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  if (visibleContacts.length === 0) {
    return <p className={css.empty}>Gosterilecek kisi bulunamadi.</p>;
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
