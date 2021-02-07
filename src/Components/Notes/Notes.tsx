import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { notesOperations } from 'redux/notes';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import s from './Notes.module.scss';
import NoteList from './NoteList/NoteList';
import Button from 'Components/Button/Button';

const { fetchNotes, addNote } = notesOperations;

export default function Notes() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchNotes());
  }, [dispath]);

  //  Validation
  // ====================================================
  const schema = yup.object().shape({
    title: yup.string().min(3, 'More then 3chars').max(30).required('Required'),
    text: yup.string().min(3).max(200).required('Required'),
  });
  // react hook form with default values part
  // ====================================
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      text: '',
    },
  });

  interface ISubmit {
    title: string;
    text: string;
    id: string;
    createTime: number;
}

  const onSubmit = (data: ISubmit ,) => {
    data.id = uuidv4();
    data.createTime = Date.now();
    dispath(addNote(data));
    // e.target.reset();
  };

  return (
    <>
      <main>
        <div className={s.hero}>
          <div className="container">
            <h1 className={s.title}>Notes for Every day</h1>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <label className={s.label}>
                <span className={s.span}>Name</span>
                <input
                  ref={register}
                  name="title"
                  className={s.nameInput}
                  type="text"
                  autoComplete="off"
                />
                <p className={s.alarm}>{errors.title?.message}</p>
              </label>
              <label className={s.label}>
                <span className={s.span}>Write some notes</span>
                <textarea
                  ref={register}
                  name="text"
                  className={s.textField}
                />
                <p className={s.alarm}>{errors.text?.message}</p>
              </label>
              <Button type="submit" className={s.btn}>
                Add Note
              </Button>
            </form>
          </div>
        </div>
        <NoteList />
      </main>
    </>
  );
}
