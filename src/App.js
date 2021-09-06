import './App.css';
import React from 'react';
import Header from './Header'
import Signin from './Signin.js'
import Navbar from './Navbar.js'
import Signup from './Signup.js'
import Board from './Board.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/signin">
              <Header/>
              <Signin/>
            </Route>

            <Route exact path ="/">
                <Header/>
                <Navbar/> 
                <Board/>
            </Route>

            <Route path ="/member">
              <Header/>
              <Signup/>
            </Route>

            <Route path ="/mypage">
              <Header/>
            </Route>
          </Switch>
      </div>
    </Router>     
  )
}



 
export default App;
