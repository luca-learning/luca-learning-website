import styled from 'styled-components';

export const Container = styled.div`
  section {
    background-color: #875C74;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    > div {
      max-width: 850px;

      > h1 {
        font-size: 40px;
      }

      > p {
        margin-top: 30px;
        font-size: 24px;
        color: #fff;
        line-height: 40px;
      }

      > button {
        background: #f96654;
        color: #fff;
        margin-top: 2rem;
        padding: 0.7rem 1.5rem;
        border: none;
        border-radius: 20px;
        font-weight: 500;
      }
    }
  }
`;