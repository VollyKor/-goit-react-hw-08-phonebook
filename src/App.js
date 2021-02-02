import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { authSelectors, authOperations } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

import LogInForm from './Components/Forms/LogInForm/LogInForm';
import SignUpForm from './Components/Forms/SignUpForm/SIgnUpForm';
import AddContactForm from './Components/Forms/AddContactForm/AddContactForm';
import Modal from './Components/Modal/Modal';
import PrivateRoute from 'Components/Routes/PrivateRoute';
import PublicRoute from 'Components/Routes/PublickRoute';
import NavBar from './Components/NavBar/NavBar';

const Notes = lazy(() => import('./Components/Notes/Notes'));
const Phonebook = lazy(() => import('./Components/Phonebook/Phonebook'));
const HeroView = lazy(() => import('./Components/HeroView/HeroView'));
const Todos = lazy(() => import('./Components/Todos/Todos'));

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (token !== null) {
      dispatch(authOperations.getUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  return (
    !isFetching && (
      <>
        <Suspense
          fallback={
            <div className="suspenseWrapper">
              <CgSpinnerTwoAlt color="#e55d34" className="suspenseLoader" />
            </div>
          }
        >
          <NavBar />
          <main>
            <Switch>
              <PrivateRoute path="/phonebook" redirectTo="/login">
                {isModalVisible && (
                  <Modal onClose={() => setIsModalVisible(false)}>
                    <AddContactForm onClose={() => setIsModalVisible(false)} />
                  </Modal>
                )}
                <div className="container">
                  <Phonebook handleCLick={() => setIsModalVisible(true)} />
                </div>
              </PrivateRoute>
              <PrivateRoute path="/todos">
                <Todos />
              </PrivateRoute>

              <PublicRoute path="/notes">
                <Notes />
              </PublicRoute>

              <PublicRoute
                exact
                path="/register"
                redirectTo="/phonebook"
                restricted
              >
                <Modal onClose={() => history.goBack()}>
                  <SignUpForm />
                </Modal>
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/phonebook"
                restricted
              >
                <Modal onClose={() => history.goBack()}>
                  <LogInForm />
                </Modal>
              </PublicRoute>

              <PublicRoute path="/" exact>
                <HeroView />
              </PublicRoute>
            </Switch>
          </main>
        </Suspense>
      </>
    )
  );
}

export default App;
