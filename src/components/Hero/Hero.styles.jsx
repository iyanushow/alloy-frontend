import styled from 'styled-components';

export const StyledContainer = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .mainContent {
  }
`;
export const MainContent = styled.div`
  h2 {
    text-transform: uppercase;
    font-size: clamp(1.9rem, 50%, 4rem);
  }

  ul {
    display: flex;
    padding: 2rem 0;
    justify-content: space-evenly;
    li {
      margin: auto 1rem;
    }
  }
  p {
    text-align: left;
    padding: 1rem 0;
    font-size: clamp(1.3rem, 50%, 2.5rem);
  }
`;
