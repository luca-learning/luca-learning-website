import React, { useEffect } from 'react';
import { useLocation } from "react-router";

import Header from '../../components/Header';

import Welcome from '../../components/Sections/Welcome';
import Products from '../../components/Sections/Products';
import Advantages from '../../components/Sections/Advantages';
import Parents from '../../components/Sections/Parents';
import Content from '../../components/Sections/Content';
import Register from '../../components/Sections/Register';
import Footer from '../../components/Footer';

import useSticky from '../../hooks/useSticky';

import { Container } from './styles';

const Main: React.FC = () => {
  const { isSticky, element } = useSticky();
  const { search } = useLocation();

  useEffect(() => {
    if (!search) {
      return;
    }

    const section = search.split('?section=')[1];
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
  }, [search]);

  return (
    <Container>
      <Header sticky={isSticky} isMain />
      <Welcome element={element} />

      <Products />
      <Advantages />
      <Content />
      <Parents />   

      <Register />

      <Footer />
    </Container>
  );
}

export default Main;
