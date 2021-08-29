import styled from 'styled-components';

export const StyledClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 25px;
  z-index: 1;
  cursor: pointer;
  position: absolute;
  right: 30px;
`;

export const StyledOpen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;

  @media (min-width: 992px) {
    display: none;
  }
`;
export const StyledDrawer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  color: #744074;
`;
export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  a {
    font-size: 16px;
    font-weight: 600;
    color: #744074;
    padding: 15px 0;
    cursor: pointer;
    border-bottom: 1px solid #e8e5e5;
    transition: all 0.25s;
    &:hover,
    :active {
      color: purple;
    }
  }
`;
