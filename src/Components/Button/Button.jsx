import s from './Button.module.scss';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export default function Button({
  children,
  onClick,
  className,
  type = 'button',
}) {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <button
      type={type}
      onClick={onClick}
      className={
        isLoading
          ? `${className} ${s.btn} ${s.loading}`
          : `${className} ${s.btn}`
      }
    >
      {children}
      {isLoading && <CgSpinnerTwoAlt className={s.spinner} />}
    </button>
  );
}
