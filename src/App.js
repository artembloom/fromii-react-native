import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from './containers/LoginContainer'
import Profile from './containers/ProfileContainer'

class App extends Component {
  render() {
    if (this.props.user.isLoggedIn) {
      return (
        <Profile />
      )
    }
    else {
      return <Login />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
