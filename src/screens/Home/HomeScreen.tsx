import React, { FC } from 'react'
import { Button, View } from 'react-native'
import { useTheme } from '@src/components/ThemeProvider/ThemeProvider'
import { Text } from '@src/styles/Text/Text.styled'

export const HomeScreen: FC = () => {
  const { changeTheme } = useTheme()
  return (
    <View>
      <Text>Test</Text>
      <Button title={'Light Theme'} onPress={() => changeTheme('light')} />
      <Button title={'Dark Theme'} onPress={() => changeTheme('dark')} />
    </View>
  )
}
