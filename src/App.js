import './App.css';
import React from 'react';
import Header from './components/Header.js'
import Signin from './Signin.js'
import Navbar from './components/Navbar.js'
import Signup from './Signup.js'
import Board from './Board.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from "axios";




function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/signin">
              <Header/>
              <Navbar/>
              <Signin/>
            </Route>

            <Route exact path ="/">
                <Header/>
                <Navbar/> 
                <Board/>
            </Route>

            <Route path ="/member">
              <Header/>
              <Navbar/>
              <Signup/>
            </Route>

            <Route path ="/mypage">
              <Header/>
              <Navbar/>
            </Route>
          </Switch>
      </div>
    </Router>     
  )
}



 
export default App;
