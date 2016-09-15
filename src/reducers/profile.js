import * as types from '../actions/actionTypes'

const initialState = null

const profile = (state = initialState, action) => {

  switch (action.type) {

    case types.FETCH_USER_PROFILE_SUCCESS:
      return action.payload.profile

    case types.FETCH_USER_PROFILE_ERROR:
    case types.FETCH_USER_PROFILE_REQUEST:
    default:
      return state

  }

}

export default profile
