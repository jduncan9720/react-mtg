import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import {Route, Switch, Router} from 'react-router'
import React, {useState} from 'react'

function App() {
  const name = "Josh";
  const [name2, setName2] = useState("Name")
  return (
    <div>
    <Navbar name={name} name2={name2}>
      <h1>Josh</h1>
    </Navbar>
    {/* <Router>
      <Switch>
        <Route exact path="/" component={Body}/>
        <Route exact path="/login" component={Body} />
      </Switch>
    </Router>
    <Footer setName2={setName2}/> */}
    </div>
  );
}

export default App;
