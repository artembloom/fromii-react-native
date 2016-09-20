import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'
import TabNavigator from '../../containers/TabNavigatorContainer'
import * as theme from '../theme'

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

export default TabBar
