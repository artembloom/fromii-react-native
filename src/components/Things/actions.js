import * as types from './actionTypes'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const getThingsRequest = () => {
  return {
    type: types.GET_THINGS_REQUEST
  }
}

const getThingsSuccess = (things) => {
  return {
    type: types.GET_THINGS_SUCCESS,
    payload: {
      things
    }
  }
}

const getThingsError = (error) => {
  return {
    type: types.GET_THINGS_ERROR,
    payload: {
      error
    }
  }
}

export const getThings = (userId) => {
  return (dispatch, getState) => {
    const state = getState()
    if (userId === state.user.id) {
      const path = '/things'
    } else {
      const path = `/users/${userId}/things`
    }
    dispatch(getThingsRequest())
    return fetch(`${URL}${path}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.user.authorizationToken}`
      }
    })
    .then((response) => response.json())
    .then((responseJson) => dispatch(getThingsSuccess(responseJson)))
    .catch((error) => dispatch(getThingsError(error)))
  }
}
