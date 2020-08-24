import React from "react"

import { Container } from './styles';

interface HeaderProps {
  sticky: boolean;
}

const Header = ({ sticky }: HeaderProps) => {
  const handleHowWork = () => {
    const el = document.getElementById("help-you-study");
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <Container sticky={sticky}>
      <header>
        <div>
          <h1>
            Luca
            <span>.</span>
          </h1>
        </div>
        <ul>
          <li onClick={handleHowWork}>Como funciona</li>
          <li>Contenido</li>
          <li><button>Regístrate y gana</button></li>
        </ul>

      </header>
    </Container>
  )
}

export default Header