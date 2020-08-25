import styled from 'styled-components';

export const Container = styled.div`
  background: #875C74;
  
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
        color: #fff;
      }

      > p {
        margin-top: 30px;
        font-size: 30px;
        color: #fff;
      }
    }
  }
`;