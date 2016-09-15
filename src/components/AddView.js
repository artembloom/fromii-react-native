import React, { Component } from 'react'

import * as theme from './theme'

import {
  View,
  Text,
  TextInput
} from 'react-native'

class AddView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.caption}>TITLE</Text>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.titleInput}
            maxLength={50}
            onChangeText={(title) => this.props.changeTitle(title)}
            value={this.props.add.title}
            selectionColor={theme.COLOR_PRIMARY}
            placeholder={'required'}
            placeholderTextColor={theme.COLOR_LINES}
            returnKeyType={'done'}
          />
        </View>
        <Text style={styles.caption}>DESCRIPTION</Text>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.descriptionInput}
            maxLength={500}
            onChangeText={(description) => this.props.changeDescription(description)}
            value={this.props.add.description}
            selectionColor={theme.COLOR_PRIMARY}
            placeholder={'optional'}
            placeholderTextColor={theme.COLOR_LINES}
            multiline={true}
            returnKeyType={'done'}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: theme.COLOR_INVERSE,
    borderTopWidth: 1,
    borderTopColor: theme.COLOR_TEXT
  },
  titleInput: {
    flex: 1,
    fontSize: 20,
    color: theme.COLOR_TEXT,
    minHeight: 40,
    backgroundColor: theme.COLOR_INVERSE,
    paddingVertical: 8,
    fontWeight: '400'
  },
  descriptionInput: {
    flex: 1,
    fontSize: 20,
    color: theme.COLOR_TEXT,
    height: 120,
    backgroundColor: theme.COLOR_INVERSE,
    paddingVertical: 8,
    fontWeight: '200'
  },
  caption: {
    fontSize: 16,
    marginTop: 16,
    marginHorizontal: 16,
    color: theme.COLOR_SUBTEXT
  },
  titleContainer: {
    marginHorizontal: 16
  }
}

export default AddView
