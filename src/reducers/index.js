import { combineReducers } from 'redux'
import user from './user'
import profile from './profile'
import add from './add'
import navigation from './navigation'
import things from './things'

const reducers = combineReducers({
  things,
  navigation,
  user,
  profile,
  add
})

export default reducers
