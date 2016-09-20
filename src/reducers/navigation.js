import * as types from '../actions/actionTypes'
import { NavigationExperimental } from 'react-native'

const { StateUtils: NavigationStateUtils } = NavigationExperimental

const initialState = {
  index: 0,
  routes: [
    { key: 'tabs' },
    { key: 'add' }
  ],
  tabs: {
    index: 0,
    routes: [
      { key: 'profile' }
    ]
  },
  profile: {
    index: 0,
    routes: [
      { key: 'profile', title: 'Profile' }
    ]
  }
}

const navigation = (state = initialState, action) => {

  switch (action.type) {

    case types.JUMP_TO_ROUTE:
      return NavigationStateUtils.jumpTo(state, action.payload.route)

    case types.SELECT_TAB:
      const tabs = NavigationStateUtils.jumpTo(state.tabs, action.payload.tabKey)
      if (tabs !== state.tabs) {
        return {
          ...state,
          tabs
        }
      }
      return state

    case types.NAV_PUSH: {
      const { tabs } = state
      const tabKey = tabs.routes[tabs.index].key
      const scenes = state[tabKey]
      const nextScenes = NavigationStateUtils.push(scenes, action.payload.route)
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes
        }
      }
      return state
    }

    case types.NAV_POP: {
      const { tabs } = state
      const tabKey = tabs.routes[tabs.index].key
      const scenes = state[tabKey]
      const nextScenes = NavigationStateUtils.pop(scenes)
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes
        }
      }
  		return state
    }

    default:
      return state
  }

}

export default navigation
