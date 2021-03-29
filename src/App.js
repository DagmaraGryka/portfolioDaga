import React from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './components/views/About/About';
import HomePage from './components/views/HomePage/HomePage';
import Contact from './components/views/Contact/Contact';
import Projects from './components/views/Projects/Projects';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>   
          <Route exact path='/' component={HomePage} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>   
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
