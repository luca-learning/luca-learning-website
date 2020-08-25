import React from 'react';

import Header from '../../components/Header';

import Welcome from '../../components/Sections/Welcome';
import Products from '../../components/Sections/Products';
import Advantages from '../../components/Sections/Advantages';
import Parents from '../../components/Sections/Parents';

import useSticky from '../../hooks/useSticky';

import { Container } from './styles';

import GlobalStyles from '../../styles/global';

function Main() {
  const { isSticky, element } = useSticky()

  return (
    <Container>
      <Header sticky={isSticky} />

      <Welcome element={element} />
      <Products />
      <Advantages />
      <Parents />

      <GlobalStyles />
    </Container>
  );
}

export default Main;
