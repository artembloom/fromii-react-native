import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectTab } from '../actions'
import { TabBarIOS } from 'react-native'
import TabNavigator from '../TabNavigator'
import * as theme from '../../colors'

class TabBar extends Component {
  render() {
    const { tabs } = this.props.navigation
    const tabKey = tabs.routes[tabs.index].key
    return (
      <TabBarIOS
        tintColor={theme.COLOR_TEXT}
        barTintColor={theme.COLOR_BACKGROUND}>
        <TabBarIOS.Item
          key={'Profile'}
          title={'Profile'}
          icon={require('./img/i-profile-o.png')}
          selectedIcon={require('./img/i-profile.png')}
          selected={tabKey === 'profile'}
          onPress={() => this.props.selectTab('profile')}>
          <TabNavigator tabKey={'profile'} />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTab: (key) => dispatch(selectTab(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar)
