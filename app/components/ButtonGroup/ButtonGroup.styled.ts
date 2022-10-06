import styled from 'styled-components/native'
import { ViewRow } from '@app/styles/View/ViewRow.styled'

export const ButtonGroupOption = styled(ViewRow)`
  align-items: center;
  padding: 4px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary.main : 'transparent'};
`
