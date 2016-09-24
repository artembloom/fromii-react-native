import React, { Component } from 'react'
import * as colors from '../../colors'
import ImagePickerView from '../ImagePickerView'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'

class AddView extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.titleInput}
            maxLength={50}
            onChangeText={(title) => this.props.changeTitle(title)}
            value={this.props.add.title}
            selectionColor={colors.COLOR_PRIMARY}
            placeholder={'Title'}
            placeholderTextColor={colors.COLOR_LINES}
            returnKeyType={'done'}
          />
        </View>
        <ImagePickerView />
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.descriptionInput}
            maxLength={500}
            onChangeText={(description) => this.props.changeDescription(description)}
            value={this.props.add.description}
            selectionColor={colors.COLOR_PRIMARY}
            placeholder={'Description'}
            placeholderTextColor={colors.COLOR_LINES}
            multiline={true}
            returnKeyType={'done'}
          />
        </View>
    </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_INVERSE
  },
  titleInput: {
    flex: 1,
    fontSize: 20,
    color: colors.COLOR_TEXT,
    minHeight: 40,
    backgroundColor: colors.COLOR_INVERSE,
    paddingVertical: 8
  },
  descriptionInput: {
    flex: 1,
    fontSize: 20,
    color: colors.COLOR_TEXT,
    height: 64,
    backgroundColor: colors.COLOR_INVERSE,
    paddingVertical: 8
  },
  caption: {
    fontSize: 18,
    marginTop: 16,
    marginHorizontal: 16,
    color: colors.COLOR_SUBTEXT
  },
  titleContainer: {
    marginHorizontal: 8
  }
}

export default AddView
