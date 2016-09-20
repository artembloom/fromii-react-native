import React, { Component } from 'react'
import * as theme from './theme'
import {
  ActivityIndicator,
  View
} from 'react-native'

class LoadingView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          color={theme.COLOR_LINES}
          size={'large'}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: theme.COLOR_INVERSE,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default LoadingView
