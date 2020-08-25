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

const rotate = keyframes`
  0% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(0rem);
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
      animation: ${rotate} 0.7s ease-in-out 0.5s;

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
  }
`;