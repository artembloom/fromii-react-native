import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const configureStore = () => {
  return createStoreWithMiddleware(reducers)
}

export default configureStore
