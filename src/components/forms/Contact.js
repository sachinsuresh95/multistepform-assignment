import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import allSelectors from "../../redux/selectors";
import { actions } from "../../redux/actions";
import TextInput from "../atoms/TextInput";
import { ErrorMessage } from "./Personal";
import Button from "../atoms/Button";
import validateAllInfo from '../../validateData'

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const email = useSelector(allSelectors.email);
  const countryCode = useSelector(allSelectors.countryCode);
  const phone = useSelector(allSelectors.phone);
  const address = useSelector(allSelectors.address);
  const city = useSelector(allSelectors.city);
  const state = useSelector(allSelectors.state);
  const country = useSelector(allSelectors.country);
  const store = useSelector(state => state)

  const dispatch = useDispatch();
  const history = useHistory();

  const dispatchContactDetailsAction = (key, value) => {
    dispatch(actions.updateContactDetails(key, value));
  };

  const validateAndProceed = () => {
    if (validateAllInfo(store)) {
      setErrorMessage("");
        history.push("/finish")
    } else {
      setErrorMessage("Validation error");
    }
  };

  return (
    <div>
      Contact
      <form>
        <TextInput
          name="email"
          id="email"
          value={email}
          onChange={(e) =>
            dispatchContactDetailsAction("email", e.target.value)
          }
          label="email"
        />
        <PhoneInputContainer>
          <TextInput
            name="countryCode"
            value={countryCode}
            id="countryCode"
            label="code"
            onChange={(e) =>
              dispatchContactDetailsAction("countryCode", e.target.value)
            }
          />
          <TextInput
            name="phone"
            value={phone}
            id="phone"
            label="phone"
            onChange={(e) =>
              dispatchContactDetailsAction("phone", e.target.value)
            }
          />
        </PhoneInputContainer>
        <TextInput
          name="address"
          id="address"
          value={address}
          onChange={(e) =>
            dispatchContactDetailsAction("address", e.target.value)
          }
          label="address"
        />
        <TextInput
          name="city"
          id="city"
          value={city}
          onChange={(e) => dispatchContactDetailsAction("city", e.target.value)}
          label="city"
        />
        <TextInput
          name="state"
          id="state"
          value={state}
          onChange={(e) =>
            dispatchContactDetailsAction("state", e.target.value)
          }
          label="state"
        />
        <TextInput
          name="country"
          id="country"
          value={country}
          onChange={(e) =>
            dispatchContactDetailsAction("country", e.target.value)
          }
          label="country"
        />
      </form>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Button
        onClick={() => {
          validateAndProceed();
        }}
      >
        Next
      </Button>
    </div>
  );
};

const PhoneInputContainer = styled.div`
  ${tw`flex items-end`}
  max-width: 177px;
  > div:first-child {
    ${tw`w-1/5 pr-1`}
    input {
      ${tw`w-full`}
    }
  }
  > div:last-child {
    ${tw`w-4/5 px-2`}
    input {
      ${tw`w-full`}
    }
  }
`;

export default Contact;
