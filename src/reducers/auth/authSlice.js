/* import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' */
import { createSlice } from '@reduxjs/toolkit/dist'
import { createAsyncThunk } from '@reduxjs/toolkit/dist'
import authService from './authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}




export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
      
      const session = await authService.login(user)

      return session
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })
  export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
      
      const newUser = await authService.register(user)

      return newUser
    } catch (error) {

        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(error.response.data)
    }
  })




  export const getMe = createAsyncThunk('auth/getMe', async (userData) => {
   return await authService.getMe(userData)
  })
  export const logout = createAsyncThunk('auth/logout', async (userData) => {
    return await authService.logout()
   })

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
          })
          .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
          }) 
          .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
          })
          .addCase(getMe.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
          })
          .addCase(getMe.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
          })
          .addCase(logout.pending, (state) => {
            state.isLoading = true
          })
          .addCase(logout.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = null
          })
          .addCase(logout.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
          })
          .addCase(register.pending, (state) => {
            state.isLoading = true
          })
          .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
          })
          .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
          })
          
    }

  })

export const { reset } = authSlice.actions
export default authSlice.reducer