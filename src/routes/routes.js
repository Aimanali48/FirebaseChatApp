import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '../components/Sign/Register/Register';
import Login from '../components/Sign/SignIn/Login';
import Landing from '../components/Layout/Landing';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Main from '../components/Main /Main';

const BrowserRouter = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <div className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/main' component={Main} />
            <Route
              exact
              path='/not-found'
              render={props => <h1>Not Found</h1>}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default BrowserRouter;
