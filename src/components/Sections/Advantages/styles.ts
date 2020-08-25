import styled from 'styled-components';

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
        color: #262626;
      }

      > p {
        margin-top: 30px;
        font-size: 30px;
        color: #595959;
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

    margin-right: 24px;
    margin-top: 50px;

    @media (max-width:600px) {
      width: 100%;
      margin-right: 0;
    }

    > span {
      position: absolute;
      left: calc(50% - 45px);
      top: -27px;
      font-size: 64px;
      font-weight: 900;
    }

    > svg {
      margin-top: 24px;
    }

    > p {
      padding: 30px;
      font-size: 16px;
      color: #595959;   
    }
  }
`;