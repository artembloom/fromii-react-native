import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingView from './components/LoadingView'
import Login from './containers/LoginContainer'
import RootNavigator from './containers/RootNavigatorContainer'

class App extends Component {
  render() {
    if (this.props.user.isLoggedIn) {
      return <RootNavigator />
    }
    else if (this.props.user.facebook) {
      return <LoadingView />
    }
    else return <Login />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
