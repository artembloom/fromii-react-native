import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

class UserItemView extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={styles.container}>
        <Image
          source={{uri: 'https://scontent.xx.fbcdn.net/v/l/t1.0-1/p200x200/10945022_1582561371957700_7772328715352594440_n.jpg?oh=ffa602b3b1770519f4f5b635aed1d8fb&oe=58772467'}}
          style={styles.picture}
        />
        <Text
          style={styles.name}
          numberOfLines={1}>
          Artem Medvedev
        </Text>
      </TouchableOpacity>
    )
  }

}

const styles = {
  container: {
    flex: 0,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: '#404040'
  }
}

export default UserItemView
