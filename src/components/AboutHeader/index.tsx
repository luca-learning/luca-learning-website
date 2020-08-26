import React from "react"

import { Container } from './styles';

interface WelcomeProps {
  element: React.MutableRefObject<null>;
}

const AboutHeader: React.FC<WelcomeProps> = ({ element }) => {
  return (
    <Container>
      <section>
        <div ref={element}>
          <h1>Sobre nosotros</h1>
        </div>
      </section>
    </Container>
  )
}

export default AboutHeader