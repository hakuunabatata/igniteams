import { COLORS } from '@/theme'
import { ActivityIndicatorProps } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${COLORS.GRAY_600};
`

export const LoadIndicator = styled.ActivityIndicator.attrs<ActivityIndicatorProps>(
  {
    color: COLORS.GREEN_700,
    size: 100,
  } as ActivityIndicatorProps,
)``
