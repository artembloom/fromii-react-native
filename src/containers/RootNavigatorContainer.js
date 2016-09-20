import { connect } from 'react-redux'
import RootNavigator from '../components/Navigation/RootNavigator'
import { jumpToRoute } from '../actions/navigation'

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    jumpToRoute: (route) => dispatch(jumpToRoute(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator)
