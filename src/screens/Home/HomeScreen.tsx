import React, { FC } from 'react'
import { View } from 'react-native'
import { Text } from '@src/styles/Text/Text.styled'
import { useTranslation } from 'react-i18next'

export const HomeScreen: FC = () => {
  const { t } = useTranslation()
  return (
    <View>
      <Text>{t('Test')}</Text>
    </View>
  )
}
