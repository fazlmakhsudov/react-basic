import React, { useState } from 'react';
import Navigation from './components/navigation.js';
import Authorization from './components/authorization.js';
import TableComponent from './components/table.js';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App(props) {
  const [showFlag, setShowFlag] = useState(true);

  function checkAuthorization() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  return (
    <Container>
      <Navigation checkAuthorization={checkAuthorization} setShowFlag={setShowFlag}/>
      <Router>
        <Switch>
          <Route path="/table">
            {
              checkAuthorization() ? <TableComponent /> : ''
            }
          </Route>
        </Switch>
      </Router>
      <Authorization showFlag={showFlag} setShowFlag={setShowFlag} />
    </Container>
  );
};