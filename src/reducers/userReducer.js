import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = 'http://localhost:3002/users'
export const initialState = {
user: [],
count: 0,
loggedInUser: false
}

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  const response = await axios.post(`${USER_URL}/login`)
  return response
}) 

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login: (state) => {
          state.count += 1
          state.loggedInUser = !state.loggedInUser
        }
    },
    extraReducers(builder){
      builder
      .addCase(fetchUser.fulfilled, (state, action) => {
          action.payload === true ? state.loggedInUser = true : state.loggedInUser = false

      })
    }
})

export const {login} = userReducer.actions
export default userReducer.reducer