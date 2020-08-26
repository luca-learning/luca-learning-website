import React, { useState } from "react"

import { AiOutlineClose } from 'react-icons/ai';

import { Container, StyledBurger, StyledMenu } from './styles';

interface HeaderProps {
  sticky: boolean;
}

interface BurgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const handleHowWork = (setOpen?: React.Dispatch<React.SetStateAction<boolean>>) => {
  const el = document.getElementById("help-you-study");
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (setOpen) {
    setOpen(false);
  }
}

const handleParent = (setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined) => {
  const el = document.getElementById("parent");
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (setOpen) {
    setOpen(false);
  }
}

const handleContent = (setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined) => {
  const el = document.getElementById("content");
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (setOpen) {
    setOpen(false);
  }
}

const handleRegister = (setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined) => {
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

const Menu = ({ open, setOpen }: MenuProps) => {
  return (
    <StyledMenu open={open}>
      <div className="close-button" onClick={() => setOpen(false)}>
        <AiOutlineClose fontFamily="Inter" fontWeight={900} size={48} />
      </div>
      <button onClick={() => handleHowWork(setOpen)}>
        Porque estudiar con Luca
      </button>
      <button onClick={() => handleParent(setOpen)}>
        Los padres nos aman
      </button>
      <button onClick={() => handleContent(setOpen)}>
        Nuestro contenido
      </button>
      <button onClick={() => handleRegister(setOpen)}>
        Regístrate ahora
      </button>
    </StyledMenu>
  )
}

const Header = ({ sticky }: HeaderProps) => {
  const [open, setOpen] = useState(false);

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
          <li onClick={() => handleHowWork()}>Porque estudiar con Luca</li>
          <li onClick={() => handleParent()}>Los padres nos aman</li>
          <li onClick={() => handleContent()}>Nuestro contenido</li>
          <li>
            <button onClick={() => handleRegister()}>Regístrate ahora</button>
          </li>
        </ul>
        <div className="mobile-menu">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </header>
    </Container>
  )
}

export default Header