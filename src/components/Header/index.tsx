import React from "react"
import { MdMenu } from 'react-icons/md';

import { Container } from './styles';

interface HeaderProps {
  sticky: boolean;
}

const Header = ({ sticky }: HeaderProps) => {
  const handleHowWork = () => {
    const el = document.getElementById("help-you-study");
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const handleParent = () => {
    const el = document.getElementById("parent");
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
          <li onClick={handleHowWork}>Porque estudiar con Luca</li>
          <li onClick={handleParent}>Los padres nos aman</li>
          <li><button>Regístrate ahora</button></li>
        </ul>
        <div className="mobile-menu">
          <MdMenu color="#fff" size={28} />
        </div>
      </header>
    </Container>
  )
}

export default Header