import { combineReducers } from 'redux'

import user from './user'
import profile from './profile'
import add from './add'

const reducers = combineReducers({
  user,
  profile,
  add
})

export default reducers
