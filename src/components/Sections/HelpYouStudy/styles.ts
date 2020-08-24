import styled from 'styled-components';

export const Container = styled.div`
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

  > div {
    width: 300px;

    margin-right: 24px;
    margin-top: 50px;

    box-shadow: 1px 1px 8px #888888;

    position: relative;

    > span {
      position: absolute;
      left: calc(50% - 45px);
      top: -27px;
      font-size: 64px;
      font-weight: 900;
    }

    > svg {
      margin-top: 72px;
    }

    > p {
      padding: 30px;
      font-size: 14px;
      color: #595959;   
    }
  }
`;