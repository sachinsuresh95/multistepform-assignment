import React, { useRef } from "react";
import tw, { styled } from "twin.macro";
const MultiBox = ({ label, list, addItem, removeItem }) => {
  const inputRef = useRef();
  const addToList = () => {
    inputRef.current.value.length > 0 && addItem(inputRef.current.value);
    inputRef.current.value = ''
  };
  return (
    <div tw="my-3">
      <StyledLabel>
        <span>{label}</span>
        <input
          type="text"
          ref={inputRef}
          onKeyDown={(e) => {
            e.code === "Enter" && addToList();
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addToList();
          }}
        >
          Add
        </button>
      </StyledLabel>
      <ItemsContainer>
        {list.map((l, i) => (
          <StyledItems
            key={l}
            onClick={() => {
              inputRef.current.value = "";
              removeItem(i);
            }}
          >
            {l}
          </StyledItems>
        ))}
      </ItemsContainer>
    </div>
  );
};

const StyledLabel = styled.label`
  ${tw`capitalize text-sm`}
  > span {
    ${tw`block`}
  }
`;
const ItemsContainer = styled.div`
  ${tw`flex flex-wrap`}
  max-width: 230px;
`;
const StyledItems = styled.span`
  ${tw`inline-block p-1 bg-white text-black rounded my-1 mr-1 text-center`}
  max-width: fit-content;
`;

export default MultiBox;
