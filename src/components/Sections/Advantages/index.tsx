import React from 'react';

import { GiOnTarget, GiGamepad, GiCalendar } from 'react-icons/gi';
import { MdQuestionAnswer } from 'react-icons/md';

import pallete from '../../../styles/colors';

import { Container, CardGroup } from './styles';

const Advantages = () => {
  return (
    <Container>
      <section id="help-you-study">
        <div>
          <h1>Vea las ventajas de Luca</h1>

          <CardGroup>
            <div>
              <GiOnTarget color={pallete.primary_3} size={48} />
              <p>En función de sus preferencias, grado de estudio y uso, le ofreceremos un horario de estudio personalizado</p>
            </div>
            <div>
              <GiGamepad color={pallete.primary_2} size={48} />
              <p>Toda la plataforma está gamificada con puntos y cuestionarios en cada lección</p>
            </div>
            <div>
              <MdQuestionAnswer color={pallete.primary_3} size={48} />
              <p>Puede probar sus habilidades desafiando a otros estudiantes que están estudiando la misma materia</p>
            </div>            
            <div>
              <GiCalendar color={pallete.primary_2} size={48} />
              <p>Con nuestro planificador de estudios, puede crear un plan personalizado para un examen</p>
            </div>
          </CardGroup>
        </div>
      </section>
    </Container>
  )
}

export default Advantages