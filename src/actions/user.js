import * as types from './actionTypes'

export function logInFacebook() {
  return {
    type: types.LOGIN_FACEBOOK
  }
}

export function logInFacebookSuccess(id, accessToken) {
  return {
    type: types.LOGIN_FACEBOOK_SUCCESS,
    payload: {
      facebook: {
        id,
        accessToken
      }
    }
  }
}

export function logInFacebookCancelled() {
  return {
    type: types.LOGIN_FACEBOOK_CANCELLED
  }
}

export function logInFacebookError(error) {
  return {
    type: types.LOGIN_FACEBOOK_ERROR,
    payload: {
      error
    }
  }
}

export function authUser() {
  return {
    type: types.AUTH_USER
  }
}

export function authUserSuccess(authorizationToken) {
  return {
    type: types.AUTH_USER_SUCCESS,
    payload: {
      authorizationToken
    }
  }
}

export function authUserError(error) {
  return {
    type: types.AUTH_USER_ERROR,
    payload: {
      error
    }
  }
}
