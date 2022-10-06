import React, { ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from '@app/styles/Text/Text.styled'
import { ViewRow } from '@app/styles/View/ViewRow.styled'
import { ButtonGroupOption } from './ButtonGroup.styled'

export interface ButtonGroup<T> {
  label?: string
  value: T
  onChange: (value: T) => void
  options: {
    text: ReactNode
    value: T
  }[]
}
export const ButtonGroup = <T extends string>({
  label,
  options,
  onChange,
  value
}: ButtonGroup<T>) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <ViewRow>
        {options.map(({ value: v, text }) => (
          <TouchableOpacity key={`${v}`} onPress={() => onChange(v)}>
            <ButtonGroupOption active={v === value}>{text}</ButtonGroupOption>
          </TouchableOpacity>
        ))}
      </ViewRow>
    </View>
  )
}
