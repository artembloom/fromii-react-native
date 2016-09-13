import * as types from './actionTypes'

export const logInFacebook = () => {
  return {
    type: types.LOGIN_FACEBOOK
  }
}

export const logInFacebookSuccess = (id, accessToken) => {
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

export const logInFacebookCancelled = () => {
  return {
    type: types.LOGIN_FACEBOOK_CANCELLED
  }
}

export const logInFacebookError = (error) => {
  return {
    type: types.LOGIN_FACEBOOK_ERROR,
    payload: {
      error
    }
  }
}

export const authUser = () => {
  return {
    type: types.AUTH_USER
  }
}

export const authUserSuccess = (user) => {
  return {
    type: types.AUTH_USER_SUCCESS,
    payload: {
      authorizationToken: user.authorizationToken,
      id: user.id
    }
  }
}

export const authUserError = (error) => {
  return {
    type: types.AUTH_USER_ERROR,
    payload: {
      error
    }
  }
}
