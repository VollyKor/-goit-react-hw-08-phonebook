import Button from 'Components/Button/Button';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import s from './Phonebook.module.scss';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/phonebook';
import { useEffect } from 'react';

interface Props {
  handleCLick: () => void;
}

export default function Phonebook({ handleCLick } : Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.setContacts());
  }, [dispatch]);

  return (
    <>
      <div className={`${s.wrapper}`}>
        <div className={s.background}>
          <h1 className={s.title}>Contacts</h1>
          <div className={s.thumb}>
            <Filter />
            <Button onClick={handleCLick}>Add Contact</Button>
          </div>
        </div>
      </div>
      <ContactList />
    </>
  );
}
