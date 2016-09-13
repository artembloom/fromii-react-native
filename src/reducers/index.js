import { combineReducers } from 'redux'

import user from './user'
import profile from './profile'

const reducers = combineReducers({
  user,
  profile
})

export default reducers
