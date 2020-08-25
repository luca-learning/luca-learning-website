import styled from 'styled-components';
import pallete from '../../../styles/colors';

export const Container = styled.div`
  background: ${pallete.secondary_white};
  height: 600px;
  
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    > div {
      max-width: 850px;
      margin: 5rem;

      > h1 {
        font-size: 50px;
        color: ${pallete.secondary_dark};
      }

      > p {
        margin-top: 30px;
        font-size: 30px;
        color: ${pallete.secondary_white};
      }
    }
  }
`;