import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            loggedIn: false,
            name: '__dev',
            email: 'dev@dev.dev'
        }
    },
    reducers: {
        login: (state, action) => {
            state.value.loggedIn = true
        }
    }
})

export default userSlice.reducer