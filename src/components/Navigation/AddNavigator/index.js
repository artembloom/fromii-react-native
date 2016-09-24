import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'
import { postThing } from '../../Add/actions'
import { jumpToRoute } from '../actions'
import Add from '../../Add'
import NavBar from '../NavBar'

const { CardStack: NavigationCardStack } = NavigationExperimental

class AddNavigator extends Component {
  render() {
    return (
      <NavigationCardStack
        navigationState={this.props.navigation.add}
        renderScene={(props) => <Add />}
        renderHeader={this._renderHeader}
      />
    )
  }

  _renderHeader = (props) => {
    return <NavBar {...props} {...this.props} />
  }

}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    jumpToRoute: (route) => dispatch(jumpToRoute(route)),
    postThing: () => dispatch(postThing())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNavigator)
