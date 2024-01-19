import React from 'react'
import { Image, Text, View } from 'react-native'
import Logo from '@assets/logo.png'
import styles from './styles'

export const Groups: React.FC = () => (
  <View style={styles.container}>
    <Image source={Logo} />
    <Text style={styles.text}>Olá Mundão veio sem porqueira</Text>
  </View>
)
