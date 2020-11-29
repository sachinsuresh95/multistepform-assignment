import React from "react";
import tw, { styled } from "twin.macro";
import { Switch, Route, Redirect } from "react-router-dom";
import Start from "./components/Start";
import Sidebar from "./components/Sidebar";
import Finish from "./components/Finish";
import { Personal, Education, Contact } from "./components/forms";
import { useSelector } from "react-redux";
import validateAll, {
  validateContactDetails,
  validateEducationDetails,
  validatePersonalDetails,
} from "./validateData";

const App = (props) => {
  const store = useSelector((state) => state);
  const validateInformation = (name) => {
    switch (name.toLowerCase()) {
      case "personal":
        return validatePersonalDetails(store);
      case "education":
        return validateEducationDetails(store);
      case "contact":
        return validateContactDetails(store);
      default:
        return false;
    }
  };
  return (
    <StyledApp>
      <nav>Multi-Form</nav>
      <div>
        <Sidebar
          steps={["Personal", "Education", "Contact"]}
          isActive={(match, location) => match?.url === location.pathname}
          isComplete={(name) => validateInformation(name)}
        />
        <FormContainer>
          <Switch>
            <Route path="/" exact>
              <Start />
            </Route>
            <Route path="/personal">
              <Personal />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/finish">
              {validateAll(store) ? <Finish /> : <Redirect to="/personal" />}
            </Route>
          </Switch>
        </FormContainer>
      </div>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  ${tw`min-h-screen flex flex-col text-white bg-background`};
  > nav {
    ${tw`text-3xl py-4 px-2`}
  }
  > div {
    ${tw`flex-grow flex`};
  }
`;

const FormContainer = styled.div`
  ${tw`h-full flex-grow`}
  > * {
    ${tw`pt-2`}
  }
`;

export default App;
