import styled from 'styled-components';
import pallete from '../../../styles/colors';

export const Container = styled.div`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    @media (min-width:600px) {
      height: 200px;
    }

    > div {
      max-width: 850px;
    }
  }
`;

export const CardGroup = styled.div`
  display: flex;
  position: relative;

  @media (max-width:600px) {
    display: grid;
    margin: 0 48px;
  }

  > div {
    position: relative;
    left: 0;
    top: -5em;
    width: 300px;
    border-radius: 30px;
    background: ${pallete.secondary_white};

    margin-right: 24px;
    margin-top: 24px;

    box-shadow: 1px 1px 8px ${pallete.secondary_dark};

    @media (max-width:600px) {
      width: 100%;
      margin-right: 0;
      position: initial;
    }

    > h1 {
      padding-top: 24px;
      font-size: 24px;
      color: ${pallete.secondary_dark};
      font-weight: 900;

      > span {
        font-size: 24px;
        font-weight: 900;
        color: ${pallete.primary_2};  
      }
    }

    > h2 {
      font-size: 18px;
      color: ${pallete.primary_2};  
      font-weight: 900;
    }

    > svg {
      margin-top: 24px;
    }

    > p {
      padding: 30px;
      font-size: 14px;
      color: ${pallete.secondary_text};  
    }
  }
`;