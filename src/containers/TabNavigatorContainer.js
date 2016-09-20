import { connect } from 'react-redux'
import TabNavigator from '../components/Navigation/TabNavigator'
import { navPush, navPop, jumpToRoute } from '../actions/navigation'

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navPush: (route) => dispatch(navPush(route)),
    navPop: () => dispatch(navPop()),
    jumpToRoute: (route) => dispatch(jumpToRoute(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigator)
