import { AiFillCloseCircle } from 'react-icons/ai';
import s from './CloseButton.module.scss';


interface Props {
  onClose : ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export default function CloseButton({ onClose } : Props) {
  return (
    <button aria-label="close-button" onClick={onClose} className={s.btn}>
      <AiFillCloseCircle className={s.icon} />
    </button>
  );
}
