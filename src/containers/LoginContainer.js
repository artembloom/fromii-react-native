import { connect } from 'react-redux'
import LoginView from '../components/LoginView'
import { logIn } '../actions/user'

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
