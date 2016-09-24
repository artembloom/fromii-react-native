import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import TextButton from './TextButton'
import IconButton from './IconButton'
import * as theme from '../../colors'

const { Header: NavigationHeader } = NavigationExperimental

class NavBar extends Component {

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitle}
        renderLeftComponent={this._renderLeft}
        renderRightComponent={this._renderRight}
        style={{backgroundColor: theme.COLOR_PRIMARY}}
      />
    )
  }

  _renderTitle = (props) => {
    return (
      <NavigationHeader.Title
        textStyle={{color: theme.COLOR_INVERSE}}
        style={{backgroundColor: 'transparent'}}>
        {props.scene.route.title || ''}
      </NavigationHeader.Title>
    )
  }

  _renderLeft = (props) => {
    if (props.scene.index === 0) {
      switch (props.scene.route.key) {
        case 'profile':
          return <IconButton icon={'plus'} onPress={() => this.props.jumpToRoute('add')} />
        case 'add':
          return <TextButton text={'Cancel'} onPress={() => this.props.jumpToRoute('tabs')} />
        default:
          return null
      }
    }
    else
      return <IconButton icon={'back'} onPress={() => this.props.navPop()} />
  }

  _renderRight = (props) => {
    switch (props.scene.route.key) {
      case 'profile':
        return <IconButton icon={'settings'} onPress={() => this.props.navPush({key: 'settings', title: 'Settings'})} />
      case 'add':
        return <TextButton text={'Save'} onPress={() => this.props.postThing()} />
      default:
        return null
    }
  }

}

export default NavBar
