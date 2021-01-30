import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.scss';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <>
      <h2 className={s.title} hidden>
        Contact List
      </h2>
      <ul className={`${s.list} ${s.listWrapper}`}>
        {contacts.map(el => {
          return (
            <li tabIndex="0" key={el.id} className={s.item}>
              <div className={s.itemWrapper}>
                <ContactItem contactObj={el} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
