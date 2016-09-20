import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import Profile from '../../containers/ProfileContainer'
import Settings from '../SettingsView'
import NavBar from './NavBar'
import * as theme from '../theme'

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

export default TabNavigator
