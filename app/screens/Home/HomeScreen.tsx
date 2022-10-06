import React, { FC } from 'react'
import { useGetRandomJokeQuery } from '@app/services/api/api'
import { Container, Setup, Punchline } from './HomeScree.styled'
import { RefreshControl } from 'react-native'

export const HomeScreen: FC = () => {
  const { data: joke, isFetching, refetch } = useGetRandomJokeQuery()
  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }>
      {joke && <Setup>{joke.setup}</Setup>}
      {joke && <Punchline>{joke.punchline}</Punchline>}
    </Container>
  )
}
