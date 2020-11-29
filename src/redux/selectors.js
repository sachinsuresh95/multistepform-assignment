const personalDetailsSelectors = {
  firstName: (state) => state.personalDetailsReducer.firstName,
  lastName: (state) => state.personalDetailsReducer.lastName,
  gender: (state) => state.personalDetailsReducer.gender,
  age: state => state.personalDetailsReducer.age,
  languages: state => state.personalDetailsReducer.languages,
  interests: state => state.personalDetailsReducer.interests
};

const educationDetailsSelectors = {
  schoolName10th: state => state.educationDetailsReducer.schoolName10th,
  schoolName12th: state => state.educationDetailsReducer.schoolName12th,
  percentage10th: state => state.educationDetailsReducer.percentage10th,
  percentage12th: state => state.educationDetailsReducer.percentage12th,
  collegeNameUg: state => state.educationDetailsReducer.collegeNameUg,
  universityNameUg: state => state.educationDetailsReducer.universityNameUg,
  percentageUg: state => state.educationDetailsReducer.percentageUg,
  collegeNamePg: state => state.educationDetailsReducer.collegeNamePg,
  universityNamePg: state => state.educationDetailsReducer.universityNamePg,
  percentagePg: state => state.educationDetailsReducer.percentagePg,
  completedPg: state => state.educationDetailsReducer.completedPg
};

const contactDetailsSelectors = {
  email: state => state.contactDetailsReducer.email,
  countryCode: state => state.contactDetailsReducer.countryCode,
  phone: state => state.contactDetailsReducer.phone,
  address: state => state.contactDetailsReducer.address,
  city: state => state.contactDetailsReducer.city,
  state: state => state.contactDetailsReducer.state,
  country: state => state.contactDetailsReducer.country
};

const allSelectors = {
  ...personalDetailsSelectors,
  ...educationDetailsSelectors,
  ...contactDetailsSelectors,
};

export default allSelectors;
