import React from "react";
import tw, {styled} from 'twin.macro'

const Button = ({children, onClick}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  ${tw`p-2 font-semibold`}
`;
export default Button;
