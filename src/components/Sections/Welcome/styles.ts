import styled from 'styled-components';
import pallete from '../../../styles/colors';

export const Container = styled.div`
  section {
    background-color: ${pallete.primary_1};
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    > div {
      max-width: 900px;

      @media (max-width:600px) {
        overflow: hidden;
        max-width: 300px;
      }

      > h1 {
        font-size: 40px;

        @media (max-width:600px) {
          font-size: 32px;
        }
      }

      > p {
        margin-top: 30px;
        font-size: 24px;
        color: ${pallete.secondary_white};
        line-height: 30px;

        @media (max-width:600px) {
          font-size: 18px;
        }
      }

      > button {
        background: ${pallete.primary_2};
        color: ${pallete.secondary_white};
        margin-top: 2rem;
        padding: 0.7rem 1.5rem;
        border: none;
        border-radius: 20px;
        font-weight: 500;
      }
    }
  }
`;