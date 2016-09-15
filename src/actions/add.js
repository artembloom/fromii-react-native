import * as types from './actionTypes'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const postThingRequest = () => {
  return {
    type: types.POST_NEW_THING_REQUEST
  }
}

const postThingSuccess = () => {
  return {
    type: types.POST_NEW_THING_SUCCESS
  }
}

const postThingError = (error) => {
  return {
    type: types.POST_NEW_THING_ERROR,
    payload: {
      error
    }
  }
}

export const changeTitle = (title) => {
  return {
    type: types.CHANGE_TITLE,
    payload: {
      title
    }
  }
}

export const changeDescription = (description) => {
  return {
    type: types.CHANGE_DESCRIPTION,
    payload: {
      description
    }
  }
}

export const postThing = () => {
  return (dispatch, getState) => {
    const { add } = getState()
    dispatch(addActions.postThing())
    return fetch(`${URL}/things`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.authorizationToken}`
      },
      body: JSON.stringify(add)
    })
    .then((response) => response.json())
    .then((responseJson) => dispatch(addActions.postThingSuccess(responseJson)))
    .catch((error) => dispatch(addActions.postThingError(error)))
  }
}
