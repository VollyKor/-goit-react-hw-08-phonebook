import s from './NoteEdit.module.scss';
import ChangeNoteForm from 'Components/Forms/ChangeNoteForm/ChangeNoteForm';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getNotes } from 'redux/notes/notes-selectors';

// interface IProps {
//   inCLose?: string;
//   onClose: Function;
// }

// interface IParams {
//   noteId?: string;
// }

export default function NoteEdit({ onClose }) {
  const { notetId } = useParams();

  const notes = useSelector(getNotes);
  const note = notes.find(e => e.id === notetId);

  return (
    <>
      {note !== undefined ? (
        <ChangeNoteForm onClose={onClose} noteObj={note} />
      ) : (
        //   create component for this
        <div>Note not Found</div>
      )}
    </>
  );
}
