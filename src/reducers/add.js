import * as types from '../actions/actionTypes'

const initialState = {
  title: '',
  description: ''
}

const add = (state = initialState, action) => {

  switch (action.type) {
    
    case types.CHANGE_TITLE:
      return {
        ...state,
        title: action.payload.title
      }

    case types.CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description
      }

    case types.POST_THING_SUCCESS:
      return initialState

    default:
      return state
  }

}

export default add
