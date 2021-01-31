import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupForm from './components/SignupFormModal';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import HauntingProfile from './components/HauntingProfile';
import SearchResults from './components/SearchResults';
import './index.css';


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
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/hauntings/:id" >
            <HauntingProfile />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
       <Footer /> 
    </>
  );
}

export default App;


  