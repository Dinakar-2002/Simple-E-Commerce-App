// import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './Component/Home.js';
import Navbar from './Component/Layout/Navbar.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import Login from './Component/Login.js';
import Student from './Component/Student.js';
import Fees from './Component/Fees.js';
import Placements from './Component/Placements.js';
import StudentView from './Component/StdentView.js';
import FeesView from './Component/FeesView.js';
import PlacementView from './Component/PlacementView.js';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Switch>

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/About" component={About}></Route>
      <Route exact path="/Contact" component={Contact}></Route>
      <Route exact path="/log" component={Login}></Route>
      <Route exact path="/student" component={Student}></Route>
      <Route exact path="/viewStudent" component={StudentView}></Route>
      <Route exact path="/fees" component={Fees}></Route>
      <Route exact path="/viewFees" component={FeesView}></Route>
      <Route exact path="/placements" component={Placements}></Route>
      <Route exact path="/viewPlacement" component={PlacementView}></Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
