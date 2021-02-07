import { useState } from 'react';
import Modal from '../../Modal/Modal';
import s from './ContactItem.module.scss';
import { contactsOperations } from 'redux/phonebook';
import { useDispatch } from 'react-redux';
import ChangeContactForm from 'Components/Forms/ChangeContactForm/ChangeContactForm';
import { IContact } from 'Interfaces/interface';

const { deleteContact } = contactsOperations;

interface IProps {
  contactObj: IContact;
}

export default function ContactItem({ contactObj }: IProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const { name, number, id } = contactObj;
  return (
    <>
      <p className={s.item}>
        <span className={s.itemName}>{name}</span>
        <span className={s.itemPhoneNumber}>{number}</span>
      </p>

      <div className={`flex-box ${s.btnList}`}>
        <button
          type="button"
          className={s.btn}
          onClick={() => {
            setIsModalVisible(true);
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

      {isModalVisible && (
        <Modal
          onClose={() => {
            setIsModalVisible(false);
          }}
        >
          <ChangeContactForm
            onClose={() => {
              setIsModalVisible(false);
            }}
            contactObj={contactObj}
          />
        </Modal>
      )}
    </>
  );
}
