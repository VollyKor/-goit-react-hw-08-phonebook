import s from './NavBar.module.scss';
import icon from '../../images/owl.svg';

import { Link, NavLink } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import { contactsOperations } from 'redux/phonebook';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'Components/Button/Button';

export default function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  return (
    <header className={s.header}>
      <div className={`${s.wrapper} container flex-box`}>
        <nav className={s.navBar}>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink
                to="/"
                className={s.link}
                activeClassName={s.active}
                exact
              >
                Main
              </NavLink>
            </li>

            {isLoggedIn && (
              <>
                <li className={s.item}>
                  <NavLink
                    to="/notes"
                    className={s.link}
                    activeClassName={s.active}
                  >
                    Notes
                  </NavLink>
                </li>
                <li className={s.item}>
                  <NavLink
                    to="/phonebook"
                    className={s.link}
                    activeClassName={s.active}
                  >
                    Phonebook
                  </NavLink>
                </li>
                <li className={s.item}>
                  <NavLink
                    to="/todos"
                    className={s.link}
                    activeClassName={s.active}
                    exact
                  >
                    Todos
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
        <div className={s.authWrapper}>
          {isLoggedIn ? (
            <div className="flex-box">
              <img className={s.icon} src={icon} alt="icon"></img>
              <span className={s.user}>hello {userName}</span>
              <Button
                className={s.btnLogout}
                onClick={() => {
                  dispatch(authOperations.logout());
                  dispatch(contactsOperations.setContacts());
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login" className={s.btnLogin}>
                LOG IN
              </Link>
              <Link to="/register" className={s.btnReg}>
                SIGN UP
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
