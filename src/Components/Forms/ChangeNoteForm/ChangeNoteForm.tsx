import s from './ChangeNoteForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { notesOperations } from 'redux/notes';
import { useDispatch } from 'react-redux';
import { INoteEntitiy } from 'Interfaces/interface';

interface IProps {
  noteObj: INoteEntitiy;
  onClose: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ChangeNoteForm({ noteObj, onClose }: IProps) {
  const dispatch = useDispatch();
  const { title, text, id } = noteObj;

  //  Validation
  // ====================================================
  const schema = yup.object().shape({
    title: yup.string().min(3, 'More then 3chars').max(20).required(),
    text: yup.string().min(3, 'More then 3chars').max(200).required(),
  });

  //  Reaact hook Form
  // ========================================
  const { register, errors, handleSubmit } = useForm<INoteEntitiy>({
    resolver: yupResolver(schema),
    defaultValues: {
      title,
      text,
    },
  });

  // Submit Form
  // ==============================================================
  const onSubmit = (data: INoteEntitiy) => {
    const changedNote = data;

    dispatch(notesOperations.changeNote({ ...changedNote, id }));
    onClose();
    return;
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.title}>Change Note</h2>

        <label className={s.label}>
          <span className={s.inputTitle}>Title</span>
          <input
            name="title"
            className={s.input}
            ref={register({ required: true, maxLength: 16 })}
          />
          <p className={s.error}>{errors.title?.message}</p>
        </label>

        <label className={s.label}>
          <span className={s.inputTitle}>Number</span>
          <textarea
            name="text"
            className={s.input}
            ref={register({ required: true })}
          />
          <p className={s.error}>{errors.text?.message}</p>
        </label>

        <button className={s.btn} type="submit">
          Save changes
        </button>
      </form>
    </div>
  );
}
