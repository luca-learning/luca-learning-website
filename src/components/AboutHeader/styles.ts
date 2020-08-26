import styled from 'styled-components';
import pallete from '../../styles/colors';

export const Container = styled.div`
  section {
    background-color: ${pallete.primary_1};
    height: 50vh;
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
    }
  }
`;