import { createSlice } from '@reduxjs/toolkit'

export interface User {
    isLoggedIn: boolean
    name: string
    email: string
}

const initialState: User = {
    isLoggedIn: true,
    name: 'Dev',
    email: 'dev@dev.dev'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true
        }
    }
})

export default userSlice.reducer
export const { login } = userSlice.actions