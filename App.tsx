import { Loading } from '@/components'
import { Groups } from '@/screens'
import { THEME } from '@/theme'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={THEME}>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  )
}
