import React, { Component } from 'react'
import * as theme from '../../colors'
import {
  TouchableOpacity,
  Text
} from 'react-native'


class TextButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}>
        <Text
          style={styles.caption}
          numberOfLines={1}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: 'transparent'
  },
  caption: {
    color: theme.COLOR_INVERSE,
    fontSize: 18,
    fontWeight: '400'
  }
}

export default TextButton
