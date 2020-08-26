 
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import About from '../pages/About';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/luca-learning-website" exact component={Main} />
      <Route path="/about" exact component={About} />
      <Route path="/luca-learning-website/about" exact component={Main} />
    </Switch>
  );
};

export default Routes;