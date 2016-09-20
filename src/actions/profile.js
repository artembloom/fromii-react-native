import * as types from './actionTypes'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const getUserProfileRequest = () => {
  return {
    type: types.GET_USER_PROFILE_REQUEST
  }
}

const getUserProfileSuccess = (profile) => {
  return {
    type: types.GET_USER_PROFILE_SUCCESS,
    payload: {
      profile
    }
  }
}

const getUserProfileError = (error) => {
  return {
    type: types.GET_USER_PROFILE_ERROR,
    payload: {
      error
    }
  }
}

export const getUserProfile = () => {
  return (dispatch, getState) => {
    const { user } = getState()
    dispatch(getUserProfileRequest())
    return fetch(`${URL}/users/${user.id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.authorizationToken}`
      }
    })
    .then((response) => response.json())
    .then((responseJson) => dispatch(getUserProfileSuccess(responseJson)))
    .catch((error) => dispatch(getUserProfileError(error)))
  }
}
