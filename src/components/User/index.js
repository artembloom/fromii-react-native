import { connect } from 'react-redux'
import LoginView from './LoginView'
import { logIn } from './actions'

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
