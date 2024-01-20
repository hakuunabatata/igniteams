import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import { Loading } from '@/components'
import { Groups } from '@/screens'
import { COLORS, THEME } from '@/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  )
}
