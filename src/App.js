import './App.css';
import React from 'react';
import Header from './Header'
import Login from './Login.js'
import Navbar from './Navbar.js'
import Board from './Board.js'
import Signup from './Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">

          <Switch>
            <Route path="/Login">
              <Login/>
            </Route>

            <Route exact path ="/">            
              <Header/>
              <Navbar/>     
              <Board/>         
            </Route>

            <Route path="/Signup">
              <Signup/>
            </Route>
          </Switch>
      </div>
    </Router>    
          
            
          
        
        
      
    
  )
}



 
export default App;
