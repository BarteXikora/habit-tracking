import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import userReducer from '../features/user'
import menuReducer from '../features/menu'

// App redux store:
const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer
    }
})

export default store

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector