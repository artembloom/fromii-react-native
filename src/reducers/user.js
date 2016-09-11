import * as types from '../actions/actionTypes'

const initialState = {
  isLoggedIn:  false
}

const user = (state = initialState, action) => {

  switch (action.type) {

    case types.LOGIN_FACEBOOK_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        facebook: action.payload.facebook
      }

    case types.AUTH_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        authorizationToken: action.payload.authorizationToken
      }

    case types.AUTH_USER_ERROR:
    case types.LOGIN_FACEBOOK_CANCELLED:
    case types.LOGIN_FACEBOOK_ERROR:
      return initialState

    default:
      return state

  }
}

export default user
