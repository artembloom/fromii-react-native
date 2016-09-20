import * as types from '../actions/actionTypes'

const initialState = null

const profile = (state = initialState, action) => {

  switch (action.type) {

    case types.GET_USER_PROFILE_SUCCESS:
      return action.payload.profile

    default:
      return state

  }
}

export default profile
