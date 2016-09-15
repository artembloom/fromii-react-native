import { connect } from 'react-redux'
import ProfileView from '../components/ProfileView'
import { fetchUserProfile } from '../actions/profile'

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserProfile: () => dispatch(fetchUserProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
