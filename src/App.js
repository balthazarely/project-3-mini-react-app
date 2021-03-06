import React from 'react';
import './App.css';
import EmployeeContainer from './EmployeeContainer';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import Logo from './Logo';
import MapContainer from './MapContainer';



const My404 = () => {
  return (
    <div>
      Page not found :-o
    </div>
    )
};

function App(employee) {
  console.log(employee._id, 'employeeId in show');
  return (
    <main>
    <Logo />
    <Header />
      <Switch>
        <Route exact path='/' component={ Login } />
        <Route exact path='/register' component={ Register } />
        <Route exact path='/employee' component={ EmployeeContainer } />
        <Route component={My404} />
      </Switch>
    </main>
  );
}

export default App;
