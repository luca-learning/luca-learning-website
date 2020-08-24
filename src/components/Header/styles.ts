import styled, { css, keyframes } from 'styled-components';

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
      background: #3843d0;
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 1px 1px 4px #888888;
      animation: ${moveDown} 0.5s ease-in-out;
    `}

    > div {
      animation: ${rotate} 0.7s ease-in-out 0.5s;

      > h1 {
        > span {
          color: #f96654;
          font-weight: 900;
        }
      }
    }  

    > ul {
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: center;

      > li {
        margin: 0.4rem 1rem 0 0;
        padding: 0 0.3rem;
        cursor: pointer;   

        > button {
          background: #f96654;
          color: #fff;
          padding: 0.7rem 1.5rem;
          border: none;
          border-radius: 20px;
          font-weight: 500;
        }
      }
    }
  }
`;