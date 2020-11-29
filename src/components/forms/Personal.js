import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import tw, { styled } from "twin.macro";

import { actions } from "../../redux/actions";
import selectors from "../../redux/selectors";
import Dropdown from "../atoms/Dropdown";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import { validatePersonalDetails } from "../../validateData";
import MultiBox from "../atoms/MultiBox";

const Personal = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const firstName = useSelector(selectors.firstName);
  const lastName = useSelector(selectors.lastName);
  const gender = useSelector(selectors.gender);
  const age = useSelector(selectors.age);
  const languages = useSelector(selectors.languages);
  const interests = useSelector(selectors.interests);
  const store = useSelector((state) => state);

  const dispatch = useDispatch();
  const history = useHistory();

  const dispatchPersonalDetailsAction = (keyName, value) => {
    dispatch(actions.updatePersonalDetails(keyName, value));
  };

  const validateAndProceed = () => {
    if (validatePersonalDetails(store)) {
      setErrorMessage("");
      history.push("/education");
    } else {
      setErrorMessage("Validation error");
    }
  };

  return (
    <div>
      Personal
      <form>
        <TextInput
          label="First Name"
          value={firstName}
          onChange={(e) =>
            dispatchPersonalDetailsAction("firstName", e.target.value)
          }
          name="fname"
          id="firstname"
        />
        <TextInput
          label="Last Name"
          value={lastName}
          onChange={(e) =>
            dispatchPersonalDetailsAction("lastName", e.target.value)
          }
          name="lname"
          id="lastname"
        />
        <Dropdown
          label="Gender"
          value={gender}
          options={["Male", "Female", "Other"]}
          onChange={(e) =>
            dispatchPersonalDetailsAction("gender", e.target.value)
          }
          name="gender"
          id="gender"
        />
        <TextInput
          name="age"
          id="age"
          value={age}
          label="age"
          onChange={(e) => dispatchPersonalDetailsAction("age", e.target.value)}
        />
        <MultiBox
          label="Languages"
          list={[...languages]}
          addItem={(item) =>
            dispatchPersonalDetailsAction("languages", [
              ...new Set([...languages, item]),
            ])
          }
          removeItem={(index) =>
            dispatchPersonalDetailsAction(
              "languages",
              [...languages].filter((l, i) => i !== index)
            )
          }
        />
        <MultiBox
          label="Interets"
          list={[...interests]}
          addItem={(item) =>
            dispatchPersonalDetailsAction("interests", [
              ...new Set([...interests, item]),
            ])
          }
          removeItem={(index) =>
            dispatchPersonalDetailsAction(
              "interests",
              [...interests].filter((l, i) => i !== index)
            )
          }
        />
      </form>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Button onClick={validateAndProceed}>Next</Button>
    </div>
  );
};

export const ErrorMessage = styled.div`
  ${tw`text-red-400 my-4 text-sm`}
`;

export default Personal;
