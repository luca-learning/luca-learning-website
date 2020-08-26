import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <section>
        <div className="lists">
          <div>
            <h1>
              Luca
              <span>.</span>
            </h1>
            <ul>
              <li>
                <a href="/#/about">Sobre nosotros</a>              
              </li>
              <li>
                <a href="/">Testimonios</a>              
              </li>
              <li>
                <a href="mailto:email@email.com">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <h1>
              Contenido
            </h1>
            <ul>
              <li>
                <a href="about">Matemáticas</a>              
              </li>
              <li>
                <a href="/">Ciencias</a>              
              </li>
              <li>
                <a href="/">Inglés</a>
              </li>
            </ul>
          </div>

          <div>
            <h1>
              Política de condiciones
            </h1>
            <ul>
              <li>
                <a href="privacypolicy">Política de privacidad</a>              
              </li>
              <li>
                <a href="termsofservice">Términos de servicios</a>              
              </li>
            </ul>
          </div>
        </div>
        <div className="rights">
          <span>2020 © Luca Learning Systems Ltd All rights reserved</span>
        </div>    
      </section>
    </Container>
  )
}

export default Footer