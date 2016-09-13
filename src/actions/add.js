import * as types from './actionTypes'

export const postNewThing = () => {
  return {
    type: types.POST_NEW_THING
  }
}

export const postNewThingSuccess = () => {
  return {
    type: types.POST_NEW_THING_SUCCESS
  }
}

export const postNewThingError = (error) => {
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
