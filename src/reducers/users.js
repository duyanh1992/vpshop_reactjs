import * as mainSiteTypes from './../constants/mainsite';

const initialState = {
    newUser: []
};

const users = (state=initialState, action) => {
    switch(action.type) {
        case mainSiteTypes.SIGN_USER_UP_SUCCESS: {
            const result = {...state};
            result.newUser.push(action.data);

            return result;
        }

        default:
            return state;
    }
}

export default users;