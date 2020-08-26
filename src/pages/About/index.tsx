import React, { useEffect } from 'react';

import Header from '../../components/Header';
import AboutHeader from '../../components/AboutHeader';
import Footer from '../../components/Footer';

import useSticky from '../../hooks/useSticky';

import { Container } from './styles';

const About: React.FC = () => {
  const { isSticky, element } = useSticky()

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [])

  return (
    <Container>
      <Header sticky={isSticky} />
      <AboutHeader element={element} />

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Id faucibus nisl tincidunt eget nullam non nisi. Velit scelerisque in dictum non consectetur a erat. Nisl tincidunt eget nullam non nisi est sit amet. Pretium viverra suspendisse potenti nullam ac tortor. Lorem dolor sed viverra ipsum nunc. Gravida arcu ac tortor dignissim convallis aenean et tortor. Enim tortor at auctor urna nunc id cursus metus aliquam. Urna porttitor rhoncus dolor purus non enim praesent elementum. Morbi tempus iaculis urna id volutpat lacus laoreet non. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Quam pellentesque nec nam aliquam. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vulputate sapien nec sagittis aliquam malesuada. Volutpat consequat mauris nunc congue nisi vitae. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.
        </p>

        <p>
          Rutrum quisque non tellus orci ac auctor augue. Accumsan sit amet nulla facilisi morbi tempus. Ultrices gravida dictum fusce ut placerat orci nulla. Vestibulum lorem sed risus ultricies. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet dictum sit amet justo donec enim diam. Aliquam nulla facilisi cras fermentum odio eu. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Turpis tincidunt id aliquet risus. Tincidunt dui ut ornare lectus sit amet est placerat. Vitae tortor condimentum lacinia quis. Id faucibus nisl tincidunt eget nullam non. Natoque penatibus et magnis dis. Tempus egestas sed sed risus pretium quam.     
        </p>
      </div>

      <Footer />
    </Container>
  );
}

export default About;
