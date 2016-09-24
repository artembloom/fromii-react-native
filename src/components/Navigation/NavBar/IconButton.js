import React, { Component } from 'react'
import {
  Image,
  TouchableOpacity
} from 'react-native'

class IconButton extends Component {

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}>
        {this._renderIcon()}
      </TouchableOpacity>
    )
  }

  _renderIcon() {
    switch (this.props.icon) {
      case 'plus':
        return <Image source={require('./img/i-plus.png')} style={{width: 24, height: 24}} />
      case 'settings':
        return <Image source={require('./img/i-settings.png')} style={{width: 24, height: 24}} />
      case 'back':
        return <Image source={require('./img/i-back.png')} style={{width: 13, height: 22}} />
      default:
        return null
    }
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: 'transparent'
  }
}

export default IconButton
