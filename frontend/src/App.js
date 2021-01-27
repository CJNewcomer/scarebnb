import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HauntingProfile from './components/HauntingProfile';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true))
  }, [dispatch]);

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <> 
      <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/hauntings/:id" >
            <HauntingProfile />
          </Route>
          <Route>
            <Footer />
          </Route>
        </Switch>
    </>
  );
}

export default App;


  