import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import userReducer from '../features/user'
import menuReducer from '../features/menu'
import habitsReducer from '../features/habits'

// App redux store:
const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
        habits: habitsReducer
    }
})

export default store

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector