import s from './ContactItem.module.scss';
import { contactsOperations } from 'redux/phonebook';
import { useDispatch } from 'react-redux';
import { IContact } from 'Interfaces/interface';
import { useHistory, useRouteMatch } from 'react-router';

const { deleteContact } = contactsOperations;

interface IProps {
  contactObj: IContact;
}

export default function ContactItem({ contactObj }: IProps) {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const { name, phone, id } = contactObj;
  return (
    <>
      <p className={s.item}>
        <span className={s.itemName}>{name}</span>
        <span className={s.itemPhoneNumber}>{phone}</span>
      </p>

      <div className={`flex-box ${s.btnList}`}>
        <button
          type="button"
          className={s.btn}
          onClick={() => {
            history.push(`${url}/${id}`);
          }}
        >
          Change Contact
        </button>

        <button
          type="button"
          className={s.btn}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete Contact
        </button>
      </div>
    </>
  );
}
