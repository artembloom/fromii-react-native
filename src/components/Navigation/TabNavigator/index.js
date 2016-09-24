import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'
import { navPush, navPop, jumpToRoute } from '../actions'
import Profile from '../../Profile'
import Settings from '../../Settings'
import NavBar from '../NavBar'
import * as theme from '../../colors'

const { CardStack: NavigationCardStack } = NavigationExperimental

class TabNavigator extends Component {

  render() {
    return (
      <NavigationCardStack
        {...this.props}
        onNavigateBack={this.props.navPop}
        navigationState={this.props.navigation[this.props.tabKey]}
        renderScene={this._renderScene}
        gestureResponseDistance={100}
        renderHeader={this._renderHeader}
      />
    )
  }

  _renderScene = (props) => {
    switch (props.scene.route.key) {
      case 'profile':
        return <Profile />
      case 'settings':
        return <Settings />
    }
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
    navPush: (route) => dispatch(navPush(route)),
    navPop: () => dispatch(navPop()),
    jumpToRoute: (route) => dispatch(jumpToRoute(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigator)
