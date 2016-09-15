import React, { Component } from 'react'
import { connect } from 'react-redux'

import Add from './containers/AddContainer'

class App extends Component {
  render() {
    return (
        <Add />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
