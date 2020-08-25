import styled, { css, keyframes } from 'styled-components';
import pallete from '../../styles/colors';

interface ContainerProps {
  sticky: boolean;
}

const moveDown = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`;

export const Container = styled.div<ContainerProps>`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2.5rem;
    position: absolute;
    z-index: 1;
    width: 100%;   

    ${props => props.sticky && css`
      background: ${pallete.primary_1};
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 1px 1px 4px ${pallete.primary_1};
      animation: ${moveDown} 0.5s ease-in-out;
    `}

    > div {
      > h1 {
        font-weight: 900;
        > span {
          color: ${pallete.primary_3};
          font-weight: 900;
        }
      }
    }  

    > ul {
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: center;

      @media (max-width:600px) {
        display: none;
      }

      > li {
        margin: 0.4rem 1rem 0 0;
        padding: 0 0.3rem;
        color: ${pallete.primary_2};
        font-weight: 700;
        cursor: pointer;   

        > button {
          background: ${pallete.secondary_white};
          color: ${pallete.secondary_dark};
          padding: 0.7rem 1.5rem;
          border: none;
          border-radius: 20px;
          font-weight: 500;

          transition: all .3s;

          &:hover {
            color: ${pallete.secondary_white};
            background: ${pallete.primary_2};
          }
        }
      }
    }

    @media (min-width:600px) {
      .mobile-menu {
        display: none;
      }
    }
  }
`;

interface StyledMenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${pallete.primary_1};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transition: transform 0.3s ease-in-out;

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    margin-right: 34px;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  button {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${pallete.primary_2};
    text-decoration: none;
    transition: color 0.3s linear;
    background: transparent;
    border: 0;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${pallete.secondary_white};
    }
  }
`

export const StyledBurger = styled.button<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`