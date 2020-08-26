 
import React from 'react';
import { HashRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Routes from './routes';

const App: React.FC = () => (
  <HashRouter basename='/'>
     <Routes />
    <GlobalStyles />
  </HashRouter>
);

export default App;