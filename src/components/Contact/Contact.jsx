import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <article className={css.card}>
      <div className={css.meta}>
        <p className={css.name}>{name}</p>
        <a className={css.phone} href={`tel:${number}`}>
          {number}
        </a>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Sil
      </button>
    </article>
  );
}

export default Contact;
