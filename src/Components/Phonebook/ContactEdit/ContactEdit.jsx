import ChangeContactForm from 'Components/Forms/ChangeContactForm/ChangeContactForm';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/phonebook/phonebook-selectors';

export default function ContactEdit({ onClose }) {
  const { contactId } = useParams();

  const contacts = useSelector(getContacts);
  const contact = contacts.find(e => e.id === contactId);
  return (
    <>
      {contact !== undefined ? (
        <ChangeContactForm onClose={onClose} contactObj={contact} />
      ) : (
        //   create component for this
        <div>Contact Not Found</div>
      )}
    </>
  );
}
