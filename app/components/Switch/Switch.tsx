import React, { FC } from 'react'
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native'
import { Container, Label } from './Switch.styles'

export interface SwitchProps extends RNSwitchProps {
  label?: string
}
export const Switch: FC<SwitchProps> = ({ label, ...props }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <RNSwitch {...props} />
    </Container>
  )
}
