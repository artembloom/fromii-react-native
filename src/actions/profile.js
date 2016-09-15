import * as types from './actionTypes'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const fetchUserProfileRequest = () => {
  return {
    type: types.FETCH_USER_PROFILE_REQUEST
  }
}

const fetchUserProfileSuccess = (profile) => {
  return {
    type: types.FETCH_USER_PROFILE_SUCCESS,
    payload: {
      profile
    }
  }
}

const fetchUserProfileError = (error) => {
  return {
    type: types.FETCH_USER_PROFILE_ERROR,
    payload: {
      error
    }
  }
}

export const fetchUserProfile = () => {
  return (dispatch, getState) => {
    const { user } = getState()
    dispatch(fetchUserProfileRequest())
    return fetch(`${URL}/users/${user.id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.authorizationToken}`
      }
    })
    .then((response) => response.json())
    .then((responseJson) => dispatch(fetchUserProfileSuccess(responseJson)))
    .catch((error) => dispatch(fetchUserProfileError(error)))
  }
}
