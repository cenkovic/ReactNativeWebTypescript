import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://official-joke-api.appspot.com/'
  }),
  endpoints: build => ({
    getRandomJoke: build.query<
      {
        setup: string
        punchline: string
      },
      void
    >({
      query: () => 'random_joke'
    })
  })
})

export const { useGetRandomJokeQuery } = api
