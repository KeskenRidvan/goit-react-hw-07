import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import ContactsForm from '../ContactsForm/ContactsForm';
import SearchBox from '../SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <main className={css.page}>
      <section className={css.container}>
        <header className={css.header}>
          <p className={css.kicker}>Redux Toolkit Contact Manager</p>
          <h1 className={css.title}>Iletisim Kitabi</h1>
          <p className={css.subtitle}>
            Kisileri hizlica ekleyin, filtreleyin ve tek tikla yonetin.
          </p>
        </header>

        <div className={css.grid}>
          <div className={css.panel}>
            <ContactsForm />
          </div>
          <div className={css.panel}>
            <SearchBox />
            {isLoading && <p className={css.subtitle}>Yukleniyor...</p>}
            {error && <p className={css.subtitle}>Hata: {error}</p>}
            <ContactList />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
