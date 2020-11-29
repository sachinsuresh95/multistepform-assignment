import React from "react";
import tw, { styled } from "twin.macro";

const Checkbox = ({ checked, label, name, id, onChange }) => {
  return (
    <div tw="my-2">
      <StyledLabel>
        <input type="checkbox" checked={checked} name={name} id={id} onChange={onChange} />
        {label}
      </StyledLabel>
    </div>
  );
};

const StyledLabel = styled.label`
  ${tw`capitalize text-sm`}
  input {
      ${tw`m-0 mr-2`}
  }
`;

export default Checkbox;
