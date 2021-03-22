import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import CloseButton from '../CloseButton/CloseButton';

const modalRoot = document.querySelector('#modalRoot') as HTMLElement;

type Props = {
  onClose: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

export default function Modal({ onClose, children }: Props) {
  function onBackdropClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.wrapper}>
        <CloseButton onClose={() => onClose()} />
        {children}
      </div>
    </div>,
    modalRoot,
  );
}
