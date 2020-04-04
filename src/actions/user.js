import * as mainTypes from '../constants/mainsite';

export const signUp = () => {
    return {
        type: mainTypes.SIGN_USER_UP
    }
}

export const signUpSuccess = data => {
    return {
        type: mainTypes.SIGN_USER_UP,
        data
    }
}