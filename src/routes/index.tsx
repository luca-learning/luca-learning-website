 
import React from 'react';
import { Route } from 'react-router-dom';

import Main from '../pages/Main';
import About from '../pages/About';

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
    </>
  );
};

export default Routes;