import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Kisi Ara
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={event => dispatch(changeFilter(event.target.value))}
          placeholder="Ada gore filtrele"
        />
      </label>
    </div>
  );
}

export default SearchBox;
