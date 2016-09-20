import React, { Component } from 'react'
import * as theme from './theme'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native'

class AddView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.navBar}>
            <TouchableOpacity style={styles.headerLeft} onPress={() => this.props.jumpToRoute('tabs')}>
              <Text style={{fontSize: 18, color: theme.COLOR_PRIMARY}}>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.headerTitle}>
              <Text style={{fontSize: 18, color: theme.COLOR_TEXT, fontWeight: '500'}}>New Thing</Text>
            </View>
            <TouchableOpacity
                style={styles.headerRight}
                onPress={() => {
                  this.props.postThing()
                  this.props.jumpToRoute('tabs')
                }}
                disabled={this.props.add.title === ''}>
              <Text style={{fontSize: 18, color: this.props.add.title === '' ? theme.COLOR_LINES : theme.COLOR_PRIMARY, fontWeight: '500'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: theme.COLOR_INVERSE
  },
  header: {
    flex: 0,
    height: 44,
    backgroundColor: theme.COLOR_INVERSE,
    borderBottomColor: theme.COLOR_BORDERS,
    borderBottomWidth: 1,
  },
  navBar: {
    flex: 1,
    flexDirection: 'row'
  },
  headerLeft: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  headerTitle: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerRight: {
    flex: 1,
    paddingRight: 12,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  titleInput: {
    flex: 1,
    fontSize: 24,
    color: theme.COLOR_TEXT,
    minHeight: 48,
    backgroundColor: theme.COLOR_INVERSE,
    paddingVertical: 8
  },
  descriptionInput: {
    flex: 1,
    fontSize: 24,
    color: theme.COLOR_TEXT,
    height: 72,
    backgroundColor: theme.COLOR_INVERSE,
    paddingVertical: 8
  },
  caption: {
    fontSize: 18,
    marginTop: 16,
    marginHorizontal: 16,
    color: theme.COLOR_SUBTEXT
  },
  titleContainer: {
    marginHorizontal: 16
  }
}

export default AddView
