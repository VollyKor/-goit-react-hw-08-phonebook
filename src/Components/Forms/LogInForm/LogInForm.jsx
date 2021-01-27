import s from './LogInForm.module.scss';
import Button from 'Components/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { authOperations } from 'redux/auth';
import { useDispatch } from 'react-redux';

export default function LogInForm() {
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
  });

  //  Reaact hook Form
  // ========================================
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    dispatch(authOperations.login(data));
    e.target.reset();
    return;
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.title}>Log In</h2>
        <label className={s.label}>
          <span className={s.inputTitle}>E-mail</span>
          <input name="email" ref={register} className={s.input} type="email" />
          <p className={s.error}>{errors.email?.message}</p>
        </label>
        <label className={s.label}>
          <span className={s.inputTitle}>Password</span>
          <input
            name="password"
            ref={register}
            className={s.input}
            type="password"
          />
          <p className={s.error}>{errors.password?.message}</p>
        </label>
        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
}
