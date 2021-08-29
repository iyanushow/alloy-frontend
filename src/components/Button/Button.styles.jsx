import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => props.theme.btnColor};
  cursor: pointer;
  padding: 0.9em 2em;
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: 1px 2px 3px gray;
  color: ${(props) => props.theme.defaultColor};
  text-transform: uppercase;
  margin: 0 auto;
  display: block;
  &:hover {
    opacity: 0.6;
    transform: scale(1.05);

    transition: all 0.2s ease-in-out;
  }
`;
