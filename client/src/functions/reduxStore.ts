import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/user'

// App redux store:
const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store