import React, { Component, PropTypes } from 'react'
import LoadingView from '../LoadingView'
import * as theme from '../theme'
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'

class LoginView extends Component {
  render() {
    if (!this.props.user.facebook) {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.logIn}>
            <View style={styles.button}>
              <Image
                source={require('./img/f.png')}
                style={styles.icon}
              />
              <Text style={styles.caption}>
                Log in with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
    else return <LoadingView />
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: theme.COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.COLOR_INVERSE
  },
  icon: {
    marginRight: 16,
    height: 25,
    width: 13
  },
  caption: {
    color: theme.COLOR_INVERSE,
    fontSize: 20
  }
}

export default LoginView
