import * as types from './actionTypes'

export const navPush = (route) => {
	route = typeof route === 'string' ? { key: route, title: route } : route
	return {
		type: types.NAV_PUSH,
		payload: {
			route
		}
	}
}

export const navPop = () => {
	return {
		type: types.NAV_POP
	}
}

export const selectTab = (tabKey) => {
	return {
		type: types.SELECT_TAB,
		payload: {
			tabKey
		}
	}
}

export const jumpToRoute = (route) => {
	return {
		type: types.JUMP_TO_ROUTE,
		payload: {
			route
		}
	}
}
