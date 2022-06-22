import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const USER_URL = 'http://localhost:3002'
export const apiUserSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: `${USER_URL}`}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users'
        })
    })
})



export const {
   useGetUsersQuery
} = apiUserSlice