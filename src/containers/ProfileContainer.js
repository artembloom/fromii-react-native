import { connect } from 'react-redux'
import ProfileView from '../components/ProfileView'
import * as profileActions from '../actions/profile'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const fetchUserProfile = () => {
  return (dispatch, getState) => {
    const { user } = getState()
    dispatch(profileActions.fetchUserProfile())
    return fetch(`${URL}/users/${user.id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.authorizationToken}`
      }
    })
    .then((response) => response.json())
    .then((responseJson) => dispatch(profileActions.fetchUserProfileSuccess(responseJson)))
    .catch((error) => dispatch(profileActions.fetchUserProfileError(error)))
  }
}

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
