import { createSlice } from '@reduxjs/toolkit'

export interface Habits {
    id: string
    name: string
    icon: string | null
    options: string[]
    selectedOption: string | null
}

const initialState: Habits[] = [{
    id: 'nauka-jezyka-angielskiego',
    name: 'Nauka języka angielskiego',
    icon: null,
    options: ['done', 'not-done'],
    selectedOption: 'done'
}, {
    id: 'trening2',
    name: 'Trening',
    icon: null,
    options: ['not-applicalbe'],
    selectedOption: null
}]

export const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {}
})

export default habitsSlice.reducer
// export const {} = habitsSlice.actions