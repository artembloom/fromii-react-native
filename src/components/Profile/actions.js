import * as types from './actionTypes'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const getProfileRequest = () => {
  return {
    type: types.GET_PROFILE_REQUEST
  }
}

const getProfileSuccess = (profile) => {
  console.log(profile);
  return {
    type: types.GET_PROFILE_SUCCESS,
    payload: {
      profile
    }
  }
}

const getProfileError = (error) => {
  return {
    type: types.GET_PROFILE_ERROR,
    payload: {
      error
    }
  }
}

export const getProfile = () => {
  return (dispatch, getState) => {
    const { user } = getState()
    dispatch(getProfileRequest())
    return fetch(`${URL}/users/${user.id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.authorizationToken}`
      }
    })
    .then((response) => response.json())
    .then((responseJson) => dispatch(getProfileSuccess(responseJson)))
    .catch((error) => dispatch(getProfileError(error)))
  }
}
