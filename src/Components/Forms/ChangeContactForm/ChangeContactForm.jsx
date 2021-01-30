import s from './ChangeContactForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contactsOperations } from 'redux/phonebook';
import { useDispatch } from 'react-redux';

export default function ChangeContactForm({ contactObj, onClose }) {
  const dispatch = useDispatch();
  const { name, number, id } = contactObj;

  //  Validation
  // ====================================================
  const schema = yup.object().shape({
    name: yup.string().min(3, 'More then 3chars').max(20),
    number: yup.string().min(3, 'More then 3chars').max(20),
  });

  //  Reaact hook Form
  // ========================================
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name,
      number,
    },
  });

  // Submit Form
  // ==============================================================
  const onSubmit = (data, e) => {
    const { name, number } = data;
    const changedContact = {
      name,
      number,
    };

    dispatch(
      contactsOperations.changeContact({
        id,
        changedContact,
      }),
    );
    e.target.reset();
    onClose();
    return;
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.title}>Change Contact</h2>

        <label className={s.label}>
          <span className={s.inputTitle}>Name</span>
          <input
            type="name"
            name="name"
            className={s.input}
            ref={register({ required: true, maxLength: 20 })}
          />
          <p className={s.error}>{errors.firstName?.message}</p>
        </label>

        <label className={s.label}>
          <span className={s.inputTitle}>Number</span>
          <input
            type="tel"
            name="number"
            className={s.input}
            ref={register({ required: true })}
          />
          <p className={s.error}>{errors.lastName?.message}</p>
        </label>

        <button className={s.btn} type="submit">
          Save changes
        </button>
      </form>
    </div>
  );
}
