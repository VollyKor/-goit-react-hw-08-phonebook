import { AiFillCloseCircle } from 'react-icons/ai';
import s from './CloseButton.module.scss';

interface IProps {
  onClose : ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export default function CloseButton({ onClose } : IProps) {
  return (
    <button aria-label="close-button" onClick={onClose} className={s.btn}>
      <AiFillCloseCircle className={s.icon} />
    </button>
  );
}

