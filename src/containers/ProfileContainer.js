import { connect } from 'react-redux'
import ProfileView from '../components/ProfileView'
import { getUserProfile } from '../actions/profile'

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: () => dispatch(getUserProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
