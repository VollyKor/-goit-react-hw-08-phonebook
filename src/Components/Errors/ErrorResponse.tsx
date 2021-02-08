import { useSelector } from 'react-redux';
import { authSelectors, authActions } from 'redux/auth';
import { useDispatch } from 'react-redux';
import s from './ErrorResponse.module.scss';
import { useEffect } from 'react';

export default function ErrorResponse() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(authActions.cleanseError());
      }, 4000);
    }
  }, [dispatch, error]);

  return (
    <>
      {error && (
        <p className={s.error}>
          {`Error: ${error.status}, ${error.message}! Pls try again`}
        </p>
      )}
    </>
  );
}
