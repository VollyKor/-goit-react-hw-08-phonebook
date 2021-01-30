import s from './Filter.module.scss';
import { contactsActions, contactsSelectors } from 'redux/phonebook';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filterQuery = useSelector(contactsSelectors.getFilterQuery);

  return (
    <label className={s.label}>
      <span className="">Filter</span>
      <input
        type="text"
        value={filterQuery}
        onChange={e => dispatch(contactsActions.setFilter(e.target.value))}
        placeholder="some query"
        className={s.input}
      />
    </label>
  );
}
