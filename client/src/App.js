import './App.css';
import Navbar from './components/Navbar'
import Callartist from './components/Callartist'
import React, {useState} from 'react'

function App() {
  const name = "Josh";
  const [name2] = useState("Tiffany")
  return (
    <div>
    <Navbar name={name} name2={name2} />
    <Callartist />
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
