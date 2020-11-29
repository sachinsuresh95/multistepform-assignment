import React from "react";
import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

const Sidebar = ({ steps, isActive, isComplete }) => {
  return (
    <SidebarContainer>
      {steps.map((step) => (
        <StepItem key={step}>
          <NavLink
            activeClassName="active-nav-link"
            isActive={isActive}
            to={`/${step.toLowerCase()}`}
          >
            {step}
            {isComplete(step) && <span>&nbsp;&#10003;</span>}
          </NavLink>
        </StepItem>
      ))}
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  ${tw`flex flex-col h-full w-1/3`}
`;
const StepItem = styled.span`
  ${tw`p-2 text-sm`};
  a {
    ${tw`no-underline text-current opacity-50`}
  }
  a.active-nav-link {
    ${tw`opacity-100 font-semibold`}
  }
`;

export default Sidebar;
