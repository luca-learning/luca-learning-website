import React from "react"

import { Container } from './styles';

interface WelcomeProps {
  element: React.MutableRefObject<null>;
}

const Welcome: React.FC<WelcomeProps> = ({ element }) => {
  return (
    <Container>
      <section>
        <div ref={element}>
          <h1>Revolucionaremos la forma en que aprendes</h1>
          <p>Con clases exclusivas y un horario de estudio adaptable a tu perfil, podrás estudiar cuando y como quieras</p>
        </div>
      </section>
    </Container>
  )
}

export default Welcome