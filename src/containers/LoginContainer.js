import { connect } from 'react-redux'
import { LoginManager, AccessToken } from 'react-native-fbsdk'
import LoginView from '../components/LoginView'
import userActions from '../actions/user'

const URL = 'https://si5vl9foih.execute-api.us-east-1.amazonaws.com/dev'

const logIn = () => {
  return (dispatch, getState) => {
    return LoginManager.logInWithReadPermissions(['public_profile', 'user_friends', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          dispatch(userActions.logInFacebookCancelled())
        } else {
          return AccessToken.getCurrentAccessToken()
            .then((data) => {
              dispatch(userActions.logInFacebookSuccess(data.userID, data.accessToken))
              dispatch(userActions.authUser())
              return fetch(`${URL}/auth`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  provider: 'facebook',
                  id: data.userID,
                  accessToken: data.accessToken,
                  email: data.email
                })
              })
              .then((response) => response.json())
              .then((responseJson) => dispatch(userActions.authUserSuccess(responseJson)))
              .catch((error) => dispatch(userActions.authUserError(error)))
            })
        }
      },
      (error) => dispatch(userActions.logInFacebookError(error))
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
