import * as types from './actionTypes'

export const postThing = () => {
  return {
    type: types.POST_NEW_THING
  }
}

export const postThingSuccess = () => {
  return {
    type: types.POST_NEW_THING_SUCCESS
  }
}

export const postThingError = (error) => {
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
