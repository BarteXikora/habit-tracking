import { createSlice } from '@reduxjs/toolkit'

export interface Menu {
    isShown: boolean
}

const initialState: Menu = {
    isShown: true
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            if (action.type === 'show') state.isShown = true
            else if (action.type === 'hide') state.isShown = false
            else state.isShown = !state.isShown
        }
    }
})

export default menuSlice.reducer
export const { toggleMenu } = menuSlice.actions