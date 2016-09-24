import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddNavigator from './components/Navigation/AddNavigator'
import RootNavigator from './components/Navigation/RootNavigator'
import LoadingView from './components/Common/LoadingView'
import User from './components/User'

class App extends Component {
  render() {
    console.log(this.props.user);
    if (!this.props.user.isLoggedIn) {
      return <User />
    } else return <RootNavigator />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
