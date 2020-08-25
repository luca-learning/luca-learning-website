import React from 'react';

import { AiOutlineVideoCamera } from 'react-icons/ai';
import { MdStayCurrentPortrait, MdPeople } from 'react-icons/md';

import pallete from '../../../styles/colors';

import { Container, CardGroup } from './styles';

const WeAre = () => {
  return (
    <Container>
      <section>
        <div>
          <CardGroup>
            <div>
              <h1>
                Luca 
                <span>.</span>
              </h1>
              <h2>App</h2>  
              <MdStayCurrentPortrait color={pallete.primary_2} size={48} />
              <p>Ofrecemos una aplicación simple y fácil de usar con una amplia colección de contenido</p>
            </div>
            <div>
              <h1>
                Luca 
                <span style={{ color: pallete.primary_1 }}>.</span>
              </h1>
              <h2 style={{ color: pallete.primary_1 }}>Liveclasses</h2>
              <MdPeople color={pallete.primary_1} size={48} /> 
              <p>Puede registrarse en programas de tutoría en vivo para aprender más</p>
            </div>
            <div>
              <h1>
                Luca 
                <span style={{ color: pallete.primary_3 }}>.</span>
              </h1>
              <h2 style={{ color: pallete.primary_3 }}>Studios</h2>
              <AiOutlineVideoCamera color={pallete.primary_3} size={48} />
              <p>Nuestros videos son producciones propias grabadas en estudios asociados</p>
            </div>
          </CardGroup>
        </div>
      </section>
    </Container>
  )
}

export default WeAre