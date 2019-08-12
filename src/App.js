import React from 'react';
import './App.css';
import EmployeeContainer from './EmployeeContainer';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';
import Header from './Header';
// import EmployeeShow from './EmployeeShow';


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
    <Header />
      <Switch>
        <Route exact path='/' component={ Register } />
        <Route exact path='/employee' component={ EmployeeContainer } />
        <Route component={My404} />
      </Switch>
    </main>
  );
}

export default App;
