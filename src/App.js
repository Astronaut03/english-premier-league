import './App.css';
import Header from './components/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import ClubDetail from './components/ClubDetail/ClubDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/:idTeam">
            <ClubDetail></ClubDetail>
          </Route>
          <Route path="/">
          <Home></Home>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
