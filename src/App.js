import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/projects/Projects';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component=
         {Home}/>
         <Route path='/contact' exact component=
         {Contact}/>
         <Route path='/projects' exact component=
         {Projects}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
