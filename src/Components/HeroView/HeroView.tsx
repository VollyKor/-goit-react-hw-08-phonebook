import s from './HeroView.module.scss';
export default function HeroView() {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h1 className={s.title}>
          Hello, pls Sign up or Log in to use Phonebook
        </h1>
      </div>
    </div>
  );
}
