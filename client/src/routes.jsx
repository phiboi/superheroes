import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Main from './views/Main/Main';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Main} path="/" exact/>
      <Route render={() => <Hero type="mongo"/>} path="/mongo"/>
      <Route render={() => <Hero type="mysql"/>} path="/mysql"/>
    </Switch>
  </BrowserRouter>
);