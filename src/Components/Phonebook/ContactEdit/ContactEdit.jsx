import ChangeContactForm from 'Components/Forms/ChangeContactForm/ChangeContactForm';
import { useParams, useRouteMatch, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/phonebook/phonebook-selectors';

export default function ContactEdit() {
  const { contactId } = useParams();
  const history = useHistory();
  const { path } = useRouteMatch();

  const contacts = useSelector(getContacts);
  const contact = contacts.find(e => e.id === contactId);
  return (
    <>
      {contact !== undefined ? (
        <ChangeContactForm
          onClose={() => {
            history.push(path);
          }}
          contactObj={contact}
        />
      ) : (
        <div>Contact Not Found</div>
      )}
    </>
  );
}
