import React from "react";
import { useSelector } from "react-redux";
import tw, { styled } from "twin.macro";
import allSelectors from "../redux/selectors";

const Finish = () => {
  const firstName = useSelector(allSelectors.firstName);
  const lastName = useSelector(allSelectors.lastName);
  const gender = useSelector(allSelectors.gender);
  const age = useSelector(allSelectors.age);
  const languages = useSelector(allSelectors.languages);
  const interests = useSelector(allSelectors.interests);
  const schoolName10th = useSelector(allSelectors.schoolName10th);
  const percentage10th = useSelector(allSelectors.percentage10th);
  const schoolName12th = useSelector(allSelectors.schoolName12th);
  const percentage12th = useSelector(allSelectors.percentage12th);
  const collegeNameUg = useSelector(allSelectors.collegeNameUg);
  const universityNameUg = useSelector(allSelectors.universityNameUg);
  const percentageUg = useSelector(allSelectors.percentageUg);
  const completedPg = useSelector(allSelectors.completedPg);
  const collegeNamePg = useSelector(allSelectors.collegeNamePg);
  const universityNamePg = useSelector(allSelectors.universityNamePg);
  const percentagePg = useSelector(allSelectors.percentagePg);
  const email = useSelector(allSelectors.email);
  const countryCode = useSelector(allSelectors.countryCode);
  const phone = useSelector(allSelectors.phone);
  const address = useSelector(allSelectors.address);
  const city = useSelector(allSelectors.city);
  const state = useSelector(allSelectors.state);
  const country = useSelector(allSelectors.country);
  return (
    <div>
      <InfoGroup>
        <div>Personal Details</div>
        <Detail>
          <span>First Name</span>
          <span>{firstName}</span>
        </Detail>
        <Detail>
          <span>Last Name</span>
          <span>{lastName}</span>
        </Detail>
        <Detail>
          <span>Gender</span>
          <span>{gender}</span>
        </Detail>
        <Detail>
          <span>Age</span>
          <span>{age}</span>
        </Detail>
        <Detail>
          <span>Languages</span>
          <span>
            {languages.map((l, i) => (
              <span>{l}&nbsp;</span>
            ))}
          </span>
        </Detail>
        <Detail>
          <span>Interests</span>
          <span>
            {interests.map((l, i) => (
              <span>{l}&nbsp;</span>
            ))}
          </span>
        </Detail>
      </InfoGroup>
      <InfoGroup>
        <div>Education Details</div>
        <Detail>
          <span>10th School</span>
          <span>{schoolName10th}</span>
        </Detail>
        <Detail>
          <span>10th percentage</span>
          <span>{percentage10th}</span>
        </Detail>
        <Detail>
          <span>12th School</span>
          <span>{schoolName12th}</span>
        </Detail>
        <Detail>
          <span>12th Percentaeg</span>
          <span>{percentage12th}</span>
        </Detail>
        <Detail>
          <span>UG college</span>
          <span>{collegeNameUg}</span>
        </Detail>
        <Detail>
          <span>UG University</span>
          <span>{universityNameUg}</span>
        </Detail>
        <Detail>
          <span>UG Percentage</span>
          <span>{percentageUg}</span>
        </Detail>
        {completedPg && (
          <>
            <Detail>
              <span>PG College</span>
              <span>{collegeNamePg}</span>
            </Detail>
            <Detail>
              <span>PG University</span>
              <span>{universityNamePg}</span>
            </Detail>
            <Detail>
              <span>PG Percentage</span>
              <span>{percentagePg}</span>
            </Detail>
          </>
        )}
      </InfoGroup>
      <InfoGroup>
        <div>Contact Details</div>
        <Detail>
          <span>Email</span>
          <span>{email}</span>
        </Detail>
        <Detail>
          <span>Phone</span>
          <span>
            {countryCode} {phone}
          </span>
        </Detail>
        <Detail>
          <span>Address</span>
          <span>{address}</span>
        </Detail>
        <Detail>
          <span>City</span>
          <span>{city}</span>
        </Detail>
        <Detail>
          <span>State</span>
          <span>{state}</span>
        </Detail>
        <Detail>
          <span>Country</span>
          <span>{country}</span>
        </Detail>
      </InfoGroup>
    </div>
  );
};

const InfoGroup = styled.div`
  ${tw`mb-6`}
`;
const Detail = styled.div`
  ${tw`flex flex-col my-1`}
  > span:first-child {
    ${tw`text-xs`}
  }
  > span:last-child {
    ${tw`font-semibold`}
  }
`;

export default Finish;
