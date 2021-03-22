import s from './EmailConfirmation.module.scss';
import Button from '../Button/Button';
import { authActions } from 'redux/auth';
import { useDispatch } from 'react-redux';

export default function EmailConfirmation() {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <h2>Confirmation link was send to your email</h2>
      <Button onClick={() => dispatch(authActions.toggleIsRegistered())}>
        Click
      </Button>
    </div>
  );
}
