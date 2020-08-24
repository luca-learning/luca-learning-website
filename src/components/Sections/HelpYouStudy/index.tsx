import React from 'react';

import { FiBox, FiMonitor, FiAward } from 'react-icons/fi';

import { Container, CardGroup } from './styles';

const WeAre = () => {
  return (
    <Container>
      <section id="help-you-study">
        <div>
          <h1>¿Cómo te ayudaremos a estudiar?</h1>
          <p>
            A través de nuestra APP podrás acceder a contenidos exclusivos de matemáticas, ciencias, inglés y muchos otros. 
          </p>     

          <p>
            El contenido se presentará como Netflix en forma de series, temporadas y episodios.
          </p>
          
          <CardGroup>
            <div>
              <FiBox color="#595959" size={48} />
              <span style={{ color: "#595959" }}>01</span>
              <p>Elige tus preferencias y titulación en el perfil de su cuenta.</p>
            </div>
            <div>
              <FiMonitor color="#f96654" size={48} />
              <span style={{ color: "#f96654" }}>02</span>
              <p>A través de su Tablero, elija una serie y una temporada para estudiar. Tu progreso siempre se guardará.</p>
            </div>
            <div>
              <FiAward color="#3843d0" size={48} />
              <span style={{ color: "#3843d0" }}>03</span>
              <p>Después de terminar su contenido, la plataforma registrará su aprendizaje para sugerir un mejor contenido en el futuro</p>
            </div>
          </CardGroup>
        </div>
      </section>
    </Container>
  )
}

export default WeAre