const nameRegex = /^[a-zA-Z ']+$/;
const educationNameregex = /^[a-zA-Z0-9 ']+$/;
const percentageRegex = /^\d{0,3}$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const countryCodeRegex = /^\d{2,3}$/;
const phoneRegex = /^\d{7,12}$/;

export const validatePersonalDetails = (store) => {
  const {
    firstName,
    lastName,
    gender,
    age,
    languages,
    interests,
  } = store.personalDetailsReducer;
  return (
    nameRegex.test(firstName) &&
    nameRegex.test(lastName) &&
    gender.length > 0 &&
    Number(age) > 0 &&
    languages.length > 0 &&
    interests.length > 0
  );
};

export const validateEducationDetails = (store) => {
  const {
    schoolName10th,
    percentage10th,
    schoolName12th,
    percentage12th,
    collegeNameUg,
    universityNameUg,
    percentageUg,
    collegeNamePg,
    universityNamePg,
    percentagePg,
  } = store.educationDetailsReducer;

  let valid =
    educationNameregex.test(schoolName12th) &&
    educationNameregex.test(schoolName10th) &&
    educationNameregex.test(collegeNameUg) &&
    educationNameregex.test(universityNameUg) &&
    percentageRegex.test(percentage10th) &&
    percentageRegex.test(percentage12th) &&
    percentageRegex.test(percentageUg) &&
    Number(percentage10th) > 0 &&
    Number(percentage10th) < 101 &&
    Number(percentage12th) > 0 &&
    Number(percentage12th) < 101 &&
    Number(percentageUg) > 0 &&
    Number(percentageUg) < 101;

  if (valid && store.educationDetailsReducer.completedPg) {
    valid =
      educationNameregex.test(collegeNamePg) &&
      educationNameregex.test(universityNamePg) &&
      percentageRegex.test(percentagePg) &&
      Number(percentagePg) > 0 &&
      Number(percentagePg) < 101;
  }

  return valid;
};

export const validateContactDetails = (store) => {
  const {
    email,
    countryCode,
    phone,
    address,
    city,
    state,
    country,
  } = store.contactDetailsReducer;

  return (
    emailRegex.test(email) &&
    countryCodeRegex.test(countryCode) &&
    phoneRegex.test(phone) &&
    address.length > 0 &&
    nameRegex.test(city) &&
    nameRegex.test(state) &&
    nameRegex.test(country)
  );
};

const validateAll = (store) => {
  let valid =
    validatePersonalDetails(store) &&
    validateEducationDetails(store) &&
    validateContactDetails(store);

  return valid;
};

export default validateAll;
