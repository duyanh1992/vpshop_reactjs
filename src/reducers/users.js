import * as mainSiteTypes from './../constants/mainsite';

const initialState = {
    newUser: [],
    currentUser: [],
    didCheckLogin: false
};

const users = (state=initialState, action) => {
    switch(action.type) {
        case mainSiteTypes.SIGN_USER_UP_SUCCESS: {
            const result = {...state};
            result.newUser.push(action.data);

            return result;
        }

        case mainSiteTypes.SIGN_USER_IN_RESPONSE: {
            const result = {...state, didCheckLogin:true};

            if(action.data){
                result.currentUser.push(action.data);
            }

            return result;
        }

        default:
            return state;
    }
}

export default users;
