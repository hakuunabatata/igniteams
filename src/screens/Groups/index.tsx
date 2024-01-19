import Logo from '@/assets/logo.png'
import React from 'react'
import { Image } from 'react-native'
import { Container, Title } from './styles'

export const Groups: React.FC = () => (
  <Container>
    <Image source={Logo} />
    <Title>Olá Mundão veio sem porteira</Title>
  </Container>
)
