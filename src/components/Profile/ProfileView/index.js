import React, { Component } from 'react'
import * as theme from '../../colors'
import LoadingView from '../../Common/LoadingView'
import {
  Text,
  View,
  Image
} from 'react-native'

class ProfileView extends Component {

  componentDidMount() {
    if (!this.props.profile) {
      this.props.getProfile()
    }
  }

  render() {
    if (this.props.profile) {
      return (
        <View style={styles.container}>
          <Image
            source={{uri: this.props.profile.picture}}
            style={styles.avatar} />
          <Text
            style={styles.name}
            numberOfLines={1}
            ellipsizeMode="middle">
            {this.props.profile.name}
          </Text>
        </View>
      )
    }
    else return <LoadingView />
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: theme.COLOR_INVERSE,
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    color: theme.COLOR_TEXT,
    marginBottom: 8
  },
  avatar: {
    margin: 16,
    width: 80,
    height: 80,
    borderRadius: 40
  }
}

export default ProfileView
