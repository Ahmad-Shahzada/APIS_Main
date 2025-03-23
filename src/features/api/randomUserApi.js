import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const randomUserApi = createApi({
  reducerPath: 'randomUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.freeapi.app/api/v1/public/' }),
  endpoints: (builder) => ({
    getRandomUsers: builder.query({
      query: () => 'randomusers',
    }),
    getUsers: builder.query({
      query: () => "randomusers/user/random",
    }),
  }),
});

export const { useGetRandomUsersQuery, useGetUsersQuery  } = randomUserApi;
