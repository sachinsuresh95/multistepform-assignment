import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { actions } from "../../redux/actions";
import allSelectors from "../../redux/selectors";
import { validateEducationDetails } from "../../validateData";
import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import TextInput from "../atoms/TextInput";
import { ErrorMessage } from "./Personal";

const Education = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const completedPg = useSelector(allSelectors.completedPg);
  const schoolName10th = useSelector(allSelectors.schoolName10th);
  const schoolName12th = useSelector(allSelectors.schoolName12th);
  const percentage10th = useSelector(allSelectors.percentage10th);
  const percentage12th = useSelector(allSelectors.percentage12th);
  const collegeNameUg = useSelector(allSelectors.collegeNameUg);
  const universityNameUg = useSelector(allSelectors.universityNameUg);
  const percentageUg = useSelector(allSelectors.percentageUg);
  const collegeNamePg = useSelector(allSelectors.collegeNamePg);
  const universityNamePg = useSelector(allSelectors.universityNamePg);
  const percentagePg = useSelector(allSelectors.percentagePg);
  const store = useSelector(state => state)

  const dispatch = useDispatch();

  const clearPgDetails = useCallback(() => {
    dispatch(actions.updateEducationDetails("collegeNamePg", ""));
    dispatch(actions.updateEducationDetails("universityNamePg", ""));
    dispatch(actions.updateEducationDetails("percentagePg", ""));
  }, [dispatch]);

  useEffect(() => {
    if (!completedPg) {
      clearPgDetails();
    }
  }, [completedPg, clearPgDetails]);

  const dispatchEducationDetailsAction = (key, value) => {
    dispatch(actions.updateEducationDetails(key, value));
  };

  const validateAndProceed = () => {
    if (validateEducationDetails(store)) {
      setErrorMessage("");
      history.push("/contact");
    } else {
      setErrorMessage("Please fill all fields");
    }
  };
  return (
    <div>
      Education
      <form>
        <TextInput
          name="tenthschool"
          id="tenthschool"
          label="10th std school name"
          value={schoolName10th}
          onChange={(e) =>
            dispatchEducationDetailsAction("schoolName10th", e.target.value)
          }
        />
        <TextInput
          name="tenthmarks"
          id="tenthmarks"
          label="10th std marks (%)"
          value={percentage10th}
          onChange={(e) =>
            dispatchEducationDetailsAction("percentage10th", e.target.value)
          }
        />
        <TextInput
          name="plustwoschool"
          id="plustwoschool"
          label="12th std school name"
          value={schoolName12th}
          onChange={(e) =>
            dispatchEducationDetailsAction("schoolName12th", e.target.value)
          }
        />
        <TextInput
          name="plustwomarks"
          id="plustwomarks"
          label="12th std marks (%)"
          value={percentage12th}
          onChange={(e) =>
            dispatchEducationDetailsAction("percentage12th", e.target.value)
          }
        />
        <TextInput
          name="ugcollege"
          id="ugcollege"
          label="ug college name"
          value={collegeNameUg}
          onChange={(e) =>
            dispatchEducationDetailsAction("collegeNameUg", e.target.value)
          }
        />
        <TextInput
          name="uguniversity"
          id="uguniversity"
          label="ug university name"
          value={universityNameUg}
          onChange={(e) =>
            dispatchEducationDetailsAction("universityNameUg", e.target.value)
          }
        />
        <TextInput
          name="ugpercentage"
          id="ugpercentage"
          label="ug marks (%)"
          value={percentageUg}
          onChange={(e) =>
            dispatchEducationDetailsAction("percentageUg", e.target.value)
          }
        />

        <Checkbox
          label="Have you completed pg?"
          id="pgcheck"
          checked={completedPg}
          name="pgCheck"
          onChange={() =>
            dispatchEducationDetailsAction("completedPg", !completedPg)
          }
        />
        {completedPg && (
          <>
            <TextInput
              name="pgcollege"
              id="pgcollege"
              label="pg college name"
              value={collegeNamePg}
              onChange={(e) =>
                dispatchEducationDetailsAction("collegeNamePg", e.target.value)
              }
            />
            <TextInput
              name="pguniversity"
              id="pguniversity"
              label="pg university name"
              value={universityNamePg}
              onChange={(e) =>
                dispatchEducationDetailsAction(
                  "universityNamePg",
                  e.target.value
                )
              }
            />
            <TextInput
              name="pgpercentage"
              id="pgpercentage"
              label="pg marks (%)"
              value={percentagePg}
              onChange={(e) =>
                dispatchEducationDetailsAction("percentagePg", e.target.value)
              }
            />
          </>
        )}
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

export default Education;
