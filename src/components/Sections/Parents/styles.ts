import styled from 'styled-components';

import pallete from '../../../styles/colors';

export const Container = styled.div`
  background: ${pallete.secondary_white};
  
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

      > p {
        margin-top: 30px;
        font-size: 30px;
        color: ${pallete.secondary_white};
      }
    }
  }
`;

export const SliderContainer = styled.div`
  color: ${pallete.secondary_text};

  .parent-card {
    display: flex !important;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 0 24px;

    > img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }

    > p {
      margin-top: 12px;
    }
  }
`;