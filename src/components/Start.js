import React from "react";
import {Link}  from 'react-router-dom'
import tw, { styled } from "twin.macro";

const Start = () => {
  return (
    <StartContainer>
      <section>
        <h3>Welcome to multi step form</h3>
        <p>
            This is a three step form that collects personal, education and contact information. <br/>
            <StyledLink to='/personal'>Click here to start</StyledLink>
        </p>
      </section>
    </StartContainer>
  );
};

const StartContainer = styled.div`
  ${tw`flex flex-col items-center sm:items-start justify-center`}
  > section {
      ${tw`w-2/3`}
      h3 {
          ${tw`mt-0`}
      }
  }
`;
const StyledLink = styled(Link)`
  ${tw`font-semibold no-underline text-current`}
`;

export default Start;
