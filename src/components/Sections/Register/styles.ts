import styled from 'styled-components';

import { lighten } from 'polished';

import pallete from '../../../styles/colors';

export const Container = styled.div`
  background: #fff;
  
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100%;

    .title {
      margin: 5rem 0;
    }

    > div {
      max-width: 850px;
      margin-bottom: 5rem;

      @media (max-width:600px) {
        .title {
          max-width: 850px;
        }
        max-width: 250px;
      }

      > h1 {
        font-size: 50px;
        color: ${pallete.secondary_dark};
      }

      > form {
        margin: 2em 0;
        display: flex;
        flex-direction: column;

        align-items: center;

        > input {
          margin-top: 12px;
          height: 38px;
          border-radius: 4px;
          border: 1px solid ${pallete.secondary_text};
          padding: 12px;
        }

        > div {
          width: 267px;
          
          > div {
            border-radius: 4px;
            border: 1px solid;
            margin-top: 12px;
            color: ${pallete.secondary_text};
          }
        }

        > button {
          background: ${pallete.primary_2};
          color: ${pallete.secondary_white};
          margin-top: 24px;
          width: 247px;
          padding: 0.7rem 1.5rem;
          border: none;
          border-radius: 20px;
          font-weight: 500;

          &:hover {
            background: ${lighten(0.1, pallete.primary_2)};
          }
        }
      }
    }
  }
`;
