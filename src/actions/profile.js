import types from './actionTypes'

export const fetchUserProfile = () => {
  return {
    type: types.FETCH_USER_PROFILE
  }
}

export const fetchUserProfileSuccess = (profile) => {
  return {
    type: types.FETCH_USER_PROFILE_SUCCESS,
    payload: {
      profile
    }
  }
}

export const fetchUserProfileError = (error) => {
  return {
    type: types.FETCH_USER_PROFILE_ERROR,
    payload: {
      error
    }
  }
}
