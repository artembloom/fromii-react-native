import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationExperimental } from 'react-native'
import AddNavigator from '../AddNavigator'
import TabBar from '../TabBar'
import { jumpToRoute } from '../actions'

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
        return <AddNavigator />
    }
  }

}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    jumpToRoute: (route) => dispatch(jumpToRoute(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator)
