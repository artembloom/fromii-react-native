import { connect } from 'react-redux'
import { selectTab } from '../actions/navigation'
import TabBar from '../components/TabBar'

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTab: (key) => dispatch(selectTab(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)
