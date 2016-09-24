import { combineReducers } from 'redux'

import navigation from '../components/Navigation/reducer'
import user from '../components/User/reducer'
import profile from '../components/Profile/reducer'
import add from '../components/Add/reducer'

const reducers = combineReducers({
  navigation,
  user,
  profile,
  add
})

export default reducers
