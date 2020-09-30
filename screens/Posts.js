import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Post from '../components/Post'

// static data
const data = {
  posts: [
    {
      id: 1,
      title: 'Hello World',
      link: 'https://google.com',
      imageUrl: 'https://picsum.photos/600/900'
    }
  ]
}

const Posts = (props) => {
  const { navigation } = props
  const { posts } = data

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => <Post post={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  }
})

export default Posts
