 
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
     <Routes />

    <GlobalStyles />
  </BrowserRouter>
);

export default App;