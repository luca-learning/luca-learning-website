import React, { useState } from "react"

import { AiOutlineClose } from 'react-icons/ai';

import { Container, StyledBurger, StyledMenu } from './styles';
import { Link } from "react-router-dom";

interface HeaderProps {
  sticky: boolean;
  isMain?: boolean;
}

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMain?: boolean;
}

const redirectTo = (section: string) => {
  document.location.href = `/luca-learning-website#/?section=${section}`;
}

const handleHowWork = (
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  isMain?: boolean
) => {
  if (!isMain) {
    redirectTo('help-you-study');
    return;
  }

  const el = document.getElementById("help-you-study");
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (setOpen) {
    setOpen(false);
  }
}

const handleParent = (
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  isMain?: boolean
) => {
  if (!isMain) {
    redirectTo('parent');
    return;
  }

  const el = document.getElementById("parent");
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (setOpen) {
    setOpen(false);
  }
}

const handleContent = (
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  isMain?: boolean
) => {
  if (!isMain) {
    redirectTo('content');
    return;
  }

  const el = document.getElementById("content");
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (setOpen) {
    setOpen(false);
  }
}

const handleRegister = (
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  isMain?: boolean
) => {
  const el = document.getElementById("register");
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (setOpen) {
    setOpen(false);
  }
}

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Menu: React.FC<MenuProps>  = ({ open, setOpen, isMain }) => {
  return (
    <StyledMenu open={open}>
      <div className="close-button" onClick={() => setOpen(false)}>
        <AiOutlineClose fontFamily="Inter" fontWeight={900} size={48} />
      </div>
      <button onClick={() => handleHowWork(setOpen, isMain)}>
        Porque estudiar con Luca
      </button>
      <button onClick={() => handleParent(setOpen, isMain)}>
        Los padres nos aman
      </button>
      <button onClick={() => handleContent(setOpen, isMain)}>
        Nuestro contenido
      </button>
      <button onClick={() => handleRegister(setOpen, isMain)}>
        Regístrate ahora
      </button>
    </StyledMenu>
  )
}

const Header = ({ sticky, isMain }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Container sticky={sticky}>
      <header>
        <div>
          <h1>
            <Link to="/">Luca</Link>
            <span>.</span>
          </h1>
        </div>
        <ul>
          <li onClick={() => handleHowWork(undefined, isMain)}>Porque estudiar con Luca</li>
          <li onClick={() => handleParent(undefined, isMain)}>Los padres nos aman</li>
          <li onClick={() => handleContent(undefined, isMain)}>Nuestro contenido</li>
          <li>
            <button onClick={() => handleRegister()}>Regístrate ahora</button>
          </li>
        </ul>
        <div className="mobile-menu">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} isMain={isMain} />
        </div>
      </header>
    </Container>
  )
}

export default Header