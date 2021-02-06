import s from './AddContactForm.module.scss';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contactsOperations } from 'redux/phonebook';
import { useDispatch } from 'react-redux';
import ErrorResponse from 'Components/Errors/ErrorResponse';
const { addContact } = contactsOperations;

//  регулярное выраженияе для фильтрации чисел
// +3 (111) 111-11-11 ==> 31111111111
//  const unmask = value.replace(/\D/g, '');

interface IProps {
  onClose : ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export default function Form({ onClose } : IProps) {
  const dispatch = useDispatch();

  //  Validation
  // ====================================================
  const schema = yup.object({
    name: yup.string().min(3, 'More then 3chars').max(20).required('Required'),
    number: yup
      .string()
      .test('len', 'Fill all space',(val='') => {
          const val_length_without_dashes = val.replace(/\D/g, '').length;
        return val_length_without_dashes === 11;
      })
      .required(),
  });

  //  Reaact hook Form
  // ========================================
interface UseFormInputs {
  name: string;
  number: string;
}

  const { register, errors, handleSubmit } = useForm<UseFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      number: '',
    }, 
  });

  // Submit Form
  // ==============================================================
    const onSubmit = (data: UseFormInputs ) => {
    dispatch(addContact(data));
    onClose();
    return;
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.title}>
         'New Contact'
        </h2>

        <label className={s.label}>
          <span className={s.inputTitle}>Name</span>
          <input type="name" name="name" className={s.input} ref={register} />
          <p className={s.error}>{errors.name?.message}</p>
        </label>

        <label className={s.label}>
          <span className={s.inputTitle}>Number</span>
          <InputMask
            name="number"
            mask="+3 (999) 999-99-99"
            alwaysShowMask={true}
            className={s.input}
            ref={register}
          />
          <p className={s.error}>{errors.number?.message}</p>
        </label>

        <button type="submit" className={s.btn}>
          Add contact
        </button>
        <ErrorResponse />
      </form>
    </div>
  );
}
