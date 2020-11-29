import React from "react";
import tw, {styled} from 'twin.macro'

const Dropdown = ({ label, value, options, id, name, onChange }) => {
  return (
    <div tw='my-3'>
      <StyledLabel htmlFor={id}>
        {label}
        <select id={id} name={name} value={value} onChange={onChange}>
          <option value=''>Select</option>
          {options.map((o) => (
            <option value={o} key={o}>{o}</option>
          ))}
        </select>
      </StyledLabel>
    </div>
  );
};

const StyledLabel = styled.label`
  ${tw`capitalize`}
  select {
      ${tw`block`}
  }
`;

export default Dropdown;
