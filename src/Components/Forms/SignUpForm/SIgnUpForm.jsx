import Button from 'Components/Button/Button';
import s from './SignUpForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { authOperations } from 'redux/auth';
import { useDispatch } from 'react-redux';
import ErrorResponse from 'Components/Errors/ErrorResponse';
export default function SignUpForm() {
  const dispatch = useDispatch();

  //  Validation
  // ====================================================
  const schema = yup.object().shape({
    password: yup
      .string()
      .min(3, 'More then 3 chars')
      .max(20, 'Less then 20 chars')
      .required('Required'),
    email: yup.string().email().required('Required'),
    name: yup
      .string()
      .min(3, 'More then 3 chars')
      .max(20, 'Less then 20 chars')
      .required('Required'),
  });

  //  Reaact hook Form
  // ========================================
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    dispatch(authOperations.register(data));
    e.target.reset();
    return;
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.title}>Sign Up</h2>
        <label className={s.label}>
          <span className={s.inputTitle}>User Name</span>
          <input ref={register} name="name" className={s.input} type="text" />
          <p className={s.error}>{errors.name?.message}</p>
        </label>
        <label className={s.label}>
          <span className={s.inputTitle}>E-mail</span>
          <input ref={register} className={s.input} name="email" type="email" />
          <p className={s.error}>{errors.email?.message}</p>
        </label>
        <label className={s.label}>
          <span className={s.inputTitle}>Password</span>
          <input
            ref={register}
            className={s.input}
            name="password"
            type="password"
          />
          <p className={s.error}>{errors.password?.message}</p>
        </label>

        <Button type="submit">Sign up</Button>
        <ErrorResponse />
      </form>
    </div>
  );
}
