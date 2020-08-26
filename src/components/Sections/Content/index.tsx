import React from 'react';

import { Container, CardGroup } from './styles';

const Contenido: React.FC = () => {
  return (
    <Container>
      <section id="content">
        <div>
          <h1>Estudia con Luca y los mejores profesores</h1>

          <CardGroup>
            <div>
              <img src="https://png.pngtree.com/element_our/png_detail/20181208/mathematics-icon-png_265065.jpg"></img>
              <h1>Matemáticas</h1>
              <p>
                Abordamos los contenidos matemáticos desde la educación primaria hasta la secundaria siempre con contenidos propios y los mejores profesores
              </p>
              <button>
                Saber más
              </button>
            </div>
            <div>
              <img src="data:image/png;base64,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"></img> 
              <h1>Ciencias</h1>
              <p>
                Abordamos el contenido científico práctico con contenido enfocado desde la educación primaria hasta la secundaria
              </p>
              <button>
                Saber más
              </button>
            </div>
            <div>
              <img 
                src="http://macpoli.com.br/wp-content/uploads/2015/05/icon_ingles.png"
                alt="Ingles"
              /> 
              <h1>Inglés</h1>
              <p>
                Estudié inglés con los mejores videos y practico conversación con otros estudiantes y tutores en la plataforma
              </p>
              <button>
                Saber más
              </button>
            </div>            
          </CardGroup>
        </div>
      </section>
    </Container>
  )
}

export default Contenido;