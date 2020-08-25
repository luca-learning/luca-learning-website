import styled from 'styled-components';
import pallete from '../../../styles/colors';

export const Container = styled.div`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${pallete.primary_1};
    height: 400px;

    > div {
      max-width: 1200px;
      margin: 5rem;

      > h1 {
        font-size: 50px;
        color: ${pallete.secondary_dark};
      }

      > p {
        margin-top: 30px;
        font-size: 30px;
        color: ${pallete.secondary_text};
      }
    }
  }
`;