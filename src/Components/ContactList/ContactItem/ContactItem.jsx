import { useState } from 'react';
import Modal from '../../Modal/Modal';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import s from './ContactItem.module.scss';
// import { BsFillStarFill } from 'react-icons/bs';
import { contactsOperations } from 'redux/phonebook';
import { useDispatch } from 'react-redux';
import ChangeContactForm from 'Components/Forms/ChangeContactForm/ChangeContactForm';

const { deleteContact } = contactsOperations;

export default function ContactItem({ contactObj }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(false);
  const dispatch = useDispatch();

  // const { firstName, lastName, phoneNumber, isChosen, id } = contactObj;
  const { name, number, id } = contactObj;
  return (
    <>
      <p className={s.item}>
        {/* <span className={s.itemName}>{` ${firstName} ${lastName} `}</span>
        <span className={s.itemPhoneNumber}>{phoneNumber}</span> */}
        <span className={s.itemName}>{name}</span>
        <span className={s.itemPhoneNumber}>{number}</span>
      </p>

      <div className={`flex-box ${s.btnList}`}>
        {/* <button
          type="button"
          className={s.btn}
          onClick={() => {
            setShowAddInfo(true);
          }}
        >
          More Info
        </button> */}

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
        {/* <BsFillStarFill
          className={s.chosenIcon}
          color={isChosen === true ? 'gold' : 'transparent'}
        /> */}
      </div>

      {showAddInfo && (
        <AdditionalInfo
          contactObj={contactObj}
          hide={() => {
            setShowAddInfo(false);
          }}
        />
      )}

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
