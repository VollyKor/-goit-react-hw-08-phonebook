import Button from 'Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { notesOperations } from 'redux/notes';
import { getNotes } from 'redux/notes/notes-selectors';
import s from './NoteList.module.scss';
import { useState } from 'react';
import Modal from 'Components/Modal/Modal';
import ChangeNoteForm from 'Components/Forms/ChangeNoteForm/ChangeNoteForm';
const { deleteNote } = notesOperations;

export default function NoteList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notes = useSelector(getNotes);
  const dispatch = useDispatch();

  return (
    <>
      <div className={`container ${s.wrapper}`}>
        <h2 hidden>Note list</h2>
        <ul className={s.list}>
          {notes.map(e => (
            <li className={s.item} key={e.id}>
              <p className={s.title}>{e.title}</p>
              <p>{e.text}</p>
              {/* {e.createdAt && <span className={s.time}>{e.createdAt}</span>} */}
              <div className={s.btnList}>
                <Button className={s.btn} onClick={() => setIsModalOpen(true)}>
                  change Note
                </Button>
                <Button
                  className={s.btn}
                  onClick={() => dispatch(deleteNote(e.id))}
                >
                  Delete
                </Button>
              </div>
              {isModalOpen ? (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <ChangeNoteForm
                    noteObj={e}
                    onClose={() => setIsModalOpen(true)}
                  />
                </Modal>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
