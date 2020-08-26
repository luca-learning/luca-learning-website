import styled from 'styled-components';
import pallete from '../../../styles/colors';

export const Container = styled.div`
  section {
    display: flex;
    padding: 48px;
    background: ${pallete.primary_1};
    flex-direction: column;

    @media (max-width:600px) {
      padding: 0;
    }

    .lists {
      display: flex;
      justify-content: center;

      @media (max-width:600px) {
        display: grid;
      }

      > div:last-child {
        margin-right: 0;
      }

      > div {
        margin-right: 124px;

        @media (max-width:600px) {
          margin-right: 0;
          margin-top: 48px;
        }

        > h1 {
          font-size: 18px;
          font-weight: 900;
          > span {
            color: ${pallete.primary_3};
            font-weight: 900;
          }
        }

        > ul {
          margin-top: 12px;
          list-style: none;

          > li {
            margin-top: 8px;

            > a {
              font-size: 14px;
            
              text-decoration: none;
              color: ${pallete.secondary_white};
              animation: color .3;

              &:hover {
                cursor: pointer;
                color: ${pallete.primary_2};
              }
            }
          }
        }
      }
    }

    .rights {
      display: flex;
      justify-content: center;
      margin-top: 36px;
      > span {
        font-size: 16px;
      }

      @media (max-width:600px) {
        padding: 24px;
      }
    }
  }
`;