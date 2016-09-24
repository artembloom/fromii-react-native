import * as types from './actionTypes'
import { LoginManager, AccessToken } from 'react-native-fbsdk'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const logInFacebookRequest = () => {
  return {
    type: types.LOGIN_FACEBOOK_REQUEST
  }
}

const logInFacebookSuccess = (id, accessToken) => {
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

const logInFacebookCancelled = () => {
  return {
    type: types.LOGIN_FACEBOOK_CANCELLED
  }
}

const logInFacebookError = (error) => {
  return {
    type: types.LOGIN_FACEBOOK_ERROR,
    payload: {
      error
    }
  }
}

const authUserRequest = () => {
  return {
    type: types.AUTH_USER_REQUEST
  }
}

const authUserSuccess = (user) => {
  return {
    type: types.AUTH_USER_SUCCESS,
    payload: {
      authorizationToken: user.authorizationToken,
      id: user.id
    }
  }
}

const authUserError = (error) => {
  return {
    type: types.AUTH_USER_ERROR,
    payload: {
      error
    }
  }
}

export const logIn = () => {
  return (dispatch, getState) => {
    dispatch(logInFacebookRequest())
    return LoginManager.logInWithReadPermissions(['public_profile', 'user_friends'])
      .then((result) => {
        if (result.isCancelled) {
          dispatch(logInFacebookCancelled())
        } else {
          return AccessToken.getCurrentAccessToken()
            .then((data) => {
              dispatch(logInFacebookSuccess(data.userID, data.accessToken))
              dispatch(authUserRequest())
              return fetch(`${URL}/auth`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  provider: 'facebook',
                  id: data.userID,
                  accessToken: data.accessToken,
                  email: data.email
                })
              })
              .then((response) => response.json())
              .then((responseJson) => dispatch(authUserSuccess(responseJson)))
              .catch((error) => dispatch(authUserError(error)))
            })
        }
      },
      (error) => dispatch(logInFacebookError(error))
    )
  }
}
