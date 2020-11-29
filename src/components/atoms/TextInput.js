import React from "react";
import tw, { styled } from "twin.macro";

const TextInput = ({ label, placeholder, id, name, value, onChange }) => {
  
  return (
    <div tw='my-3'>
      <StyledLabel htmlFor={id}>
        {label}
        <input id={id} name={name} type="text" placeholder={placeholder} value={value} onChange={onChange} />
      </StyledLabel>
    </div>
  );
};

const StyledLabel = styled.label`
  ${tw`capitalize text-sm`}
  input {
    ${tw`block`}
  }
`;

export default TextInput;
