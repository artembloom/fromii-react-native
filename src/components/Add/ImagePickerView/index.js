import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker'
import * as colors from '../../colors.js'
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native'

class ImagePickerView extends Component {
  constructor() {
    super()
    this.state = {
      source: null
    }
  }

  render() {
    if (!this.state.source) {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.showImagePicker.bind(this)}>
            <Image
              source={require('./img/i-camera.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <Image
          source={this.state.source}
          style={styles.image}>
          <TouchableOpacity onPress={this.deleteImage.bind(this)}>
            <Image source={require('./img/i-cancel.png')} style={{width: 24, height: 24}}/>
          </TouchableOpacity>
        </Image>
      )
    }

  }

  deleteImage() {
    this.setState({source: null})
  }

  showImagePicker() {
    const options = {
      mediaType: 'photo',
      noData: true
    }
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled ImagePicker')
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error)
      } else {
        let source
        if (Platform.OS === 'ios') {
          source = {uri: response.uri.replace('file://', ''), isStatic: true}
        } else {
          source = {uri: response.uri, isStatic: true}
        }
        this.setState({source: source})
      }
    })
  }

}

const styles = {
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.COLOR_BACKGROUND,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  icon: {
    width: 100,
    height: 80
  },
  image: {
    flex: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    padding: 8
  }
}

export default ImagePickerView
