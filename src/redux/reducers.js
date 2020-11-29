import { combineReducers } from "redux";

import { actionTypes } from "./actions";
import {
  initialContactDetailsState,
  initialEducationDetailsState,
  initialPersonalDetailsState,
} from "./initialStates";

const personalDetailsReducer = (
  state = initialPersonalDetailsState,
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_PERSONAL_DETAILS:
      return {
        ...state,
        [action.data.key]: action.data.value,
      };
    default:
      return state;
  }
};

const educationDetailsReducer = (
  state = initialEducationDetailsState,
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_EDUCATION_DETAILS:
      return {
        ...state,
        [action.data.key]: action.data.value,
      };
    default:
      return state;
  }
};

const contactDetailsReducer = (state = initialContactDetailsState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CONTACT_DETAILS:
      return {
        ...state,
        [action.data.key]: action.data.value,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  personalDetailsReducer,
  educationDetailsReducer,
  contactDetailsReducer,
});

export default rootReducer;
