import * as mainTypes from '../constants/mainsite';

export const signUp = signUpData => {
    return {
        type: mainTypes.SIGN_USER_UP,
        signUpData
    }
}

export const signUpSuccess = data => {
    return {
        type: mainTypes.SIGN_USER_UP_SUCCESS,
        data
    }
}