import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import Add from '../../containers/AddContainer'
import TabBar from '../../containers/TabBarContainer'

const { CardStack: NavigationCardStack } = NavigationExperimental

class RootNavigator extends Component {

  render() {
    return (
      <NavigationCardStack
        {...this.props}
        onNavigateBack={() => this.props.jumpToRoute('tabs')}
        navigationState={this.props.navigation}
        renderScene={this._renderScene}
        direction={'vertical'}
      />
    )
  }

  _renderScene = (props) => {
    switch (props.scene.route.key) {
      case 'tabs':
        return <TabBar />
      case 'add':
        return <Add />
    }
  }
  
}

export default RootNavigator
