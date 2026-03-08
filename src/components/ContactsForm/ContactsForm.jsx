import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';
import css from './ContactsForm.module.css';

function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const normalizedName = name.trim();
    const normalizedNumber = number.trim();

    if (!normalizedName || !normalizedNumber) {
      return;
    }

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName.toLowerCase()
    );

    if (isDuplicate) {
      window.alert(`${normalizedName} zaten kayitli.`);
      return;
    }

    dispatch(
      addContact({
        name: normalizedName,
        number: normalizedNumber,
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <>
      <h2 className={css.title}>Yeni Kisi Ekle</h2>

      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span>Ad Soyad</span>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            pattern="[a-zA-ZA-Za-z\u00C0-\u017F\u0400-\u04FF\s'-]+"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Orn: Ahmet Yilmaz"
            required
          />
        </label>

        <label className={css.label}>
          <span>Telefon</span>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={event => setNumber(event.target.value)}
            pattern="\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
            title="Phone number can contain digits, spaces, dashes, parentheses and can start with +"
            placeholder="Orn: +90 555 000 00 00"
            required
          />
        </label>

        <button className={css.button} type="submit">
          Kisiyi Kaydet
        </button>
      </form>
    </>
  );
}

export default ContactsForm;
