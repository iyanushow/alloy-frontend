import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  min-height: 30vh;
  align-items: center;
`;
export const StyledDiv = styled.div`
  & > * {
    margin-bottom: 2.5rem;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 1.3rem;
  }

  svg {
    position: relative;
    top: 3px;
  }
`;
