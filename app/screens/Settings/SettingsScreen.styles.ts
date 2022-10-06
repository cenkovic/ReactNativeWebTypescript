import styled from 'styled-components/native'
import { ViewRow } from '@app/styles/View/ViewRow.styled'

export const Container = styled.View`
  padding: 8px;
`

export const OptionRow = styled(ViewRow)`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.main};
`
