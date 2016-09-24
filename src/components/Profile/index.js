import { connect } from 'react-redux'
import ProfileView from './ProfileView'
import { getProfile } from './actions'

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
