import Sticky from 'react-stickynode';
import styled from 'styled-components';

export const StyledMain = styled.main``;

export const StyledSticky = styled(Sticky)`
  .sticky {
    header {
      transition: all 0.5s ease-in-out;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
      background-color: #ffffff;
      color: #000000;
    }
  }
`;
