import { createStore } from 'redux'
import reducers from '../reducers'

const configureStore = (onComplete) => {
  const store = createStore(reducers)
  return store
}

export default configureStore
