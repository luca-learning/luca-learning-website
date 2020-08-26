import styled from 'styled-components';
import pallete from '../../styles/colors';

export const Container = styled.div`
  width: 100%;

  > div {  
    > p {
      padding: 0 48px 48px 48px;
      font-size: 16px;
      color: ${pallete.secondary_text};

      &:first-child {
        padding-top: 48px;
      }
    }
  }
`;