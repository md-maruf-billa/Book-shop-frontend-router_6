import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { TUser } from '@/Types'

type Tstate = {
  user: TUser | null
  token: string | null
}

const initialState: Tstate = {
  user: null,
  token: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
    },
    logout: state => {
      state.user = null
      state.token = null
    }
  }
})

export const { setUser, logout } = userSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user
export const selectToken = (state: RootState) => state.auth.token

export default userSlice.reducer
