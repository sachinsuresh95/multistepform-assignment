export const actionTypes = {
    UPDATE_PERSONAL_DETAILS: 'UPDATE_PERSONAL_DETAILS',
    UPDATE_EDUCATION_DETAILS: 'UPDATE_EDUCATION_DETAILS',
    UPDATE_CONTACT_DETAILS: 'UPDATE_CONTACT_DETAILS'
}

export const actions = {
    updatePersonalDetails: (key, value) => ({
        type: actionTypes.UPDATE_PERSONAL_DETAILS,
        data: {
            key, value
        }
    }),
    updateEducationDetails: (key, value) => ({
        type: actionTypes.UPDATE_EDUCATION_DETAILS,
        data: {
            key, value
        }
    }),
    updateContactDetails: (key, value) => ({
        type: actionTypes.UPDATE_CONTACT_DETAILS,
        data: {
            key, value
        }
    })
}
