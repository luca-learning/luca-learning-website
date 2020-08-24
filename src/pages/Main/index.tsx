import React from 'react';

import Header from '../../components/Header';

import Welcome from '../../components/Sections/Welcome';
import HelpYouStudy from '../../components/Sections/HelpYouStudy';
import Content from '../../components/Sections/Content';

import useSticky from '../../hooks/useSticky';

import { Container } from './styles';

import GlobalStyles from '../../styles/global';

function Main() {
  const { isSticky, element } = useSticky()

  return (
    <Container>
      <Header sticky={isSticky} />

      <Welcome element={element} />
      <HelpYouStudy />
      <Content />

      <GlobalStyles />
    </Container>
  );
}

export default Main;
