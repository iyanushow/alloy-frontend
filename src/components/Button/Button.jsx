import { StyledButton } from './Button.styles';

const Button = ({ bkgColor, children, onClick, href, className, ...rest }) => {
  return (
    <StyledButton onClick={onClick} className={className} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
