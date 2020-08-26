import styled from 'styled-components';
import pallete from '../../../styles/colors';
import { lighten } from 'polished';

export const Container = styled.div`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

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

export const CardGroup = styled.div`
  display: flex;

  @media (max-width:600px) {
    display: grid;
  }

  > div {
    width: 300px;

    padding: 24px;
    margin: 50px 24px 50px;
    border-radius: 24px;

    box-shadow: 1px 1px 8px ${pallete.secondary_dark};

    @media (max-width:600px) {
      width: 100%;
      margin-right: 0;
    }

    > img {
      width: 92px;
      height: 92px;
    }

    > h1 {
      margin-top: 0.5em;
      color: ${pallete.secondary_text}
    }

    > p {
      padding: 30px;
      height: 200px;
      font-size: 16px;
      color: ${pallete.secondary_text};   
    }

    > button {
      background: ${pallete.primary_2};
      color: ${pallete.secondary_white};
      padding: 0.7rem 1.5rem;
      border: none;
      border-radius: 20px;
      font-weight: 500;

      &:hover {
        background: ${lighten(0.1, pallete.primary_2)};
      }
    }
  }
`;