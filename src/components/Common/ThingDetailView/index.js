import React, { Component } from 'react'
import UserItemView from './UserItemView'
import {
  ScrollView,
  Text,
  Image,
  Dimensions,
  View
} from 'react-native'

class ThingDetailView extends Component {
  render() {
    return (
      <ScrollView>
        <UserItemView />
        <Image
          source={{uri: 'https://scontent.xx.fbcdn.net/v/l/t1.0-1/p200x200/10945022_1582561371957700_7772328715352594440_n.jpg?oh=ffa602b3b1770519f4f5b635aed1d8fb&oe=58772467'}}
          style={styles.image}/>
        <Text style={styles.title}>Давно выяснено, что при оценке дизайна и композиции читаемый текст </Text>
        <Text style={styles.description}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</Text>
      </ScrollView>
    )
  }

}

const styles = {
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  title: {
    margin: 8,
    color: '#404040',
    fontSize: 20
  },
  description: {
    margin: 8,
    color: '#7f7f7f',
    fontSize: 16
  }
}

export default ThingDetailView
