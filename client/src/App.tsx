import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoutes from './functions/ProtectedRoutes'

import LoginPage from './components/sites/LoginPage'
import Dashboard from './components/sites/Dashboard'
import Page404 from './components/sites/Page404'

import { Provider } from 'react-redux'
import store from './functions/reduxStore'

import './css/main.css'

const App = () => {
  return <Provider store={store}>

    {/* App router: */}
    <Routes>

      {/* Protected routes - available for logged users only: */}
      <Route element={<ProtectedRoutes />}>

        {/* Redirects from "home page" to dashboard: */}
        <Route path='/' element={<Navigate to={'/dashboard'} />} />

        {/* Dashboard page: */}
        <Route path='/dashboard' element={<Dashboard />} />

        {/* Handles 404: */}
        <Route path='*' element={<Page404 />} />
      </Route>

      {/* Login form page: */}
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  </Provider>
}

export default App