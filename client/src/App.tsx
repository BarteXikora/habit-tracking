import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoutes from './functions/ProtectedRoutes'

const App = () => {
  return <>

    {/* App router: */}
    <Routes>

      {/* Protected routes - available for logged users only: */}
      <Route element={<ProtectedRoutes />}>

        {/* Redirects from "home page" to dashboard: */}
        <Route path='/' element={<Navigate to={'/dashboard'} />} />

        {/* Dashboard page: */}
        <Route path='/dashboard' element={<h1>Hello, World!</h1>} />

        {/* Handles 404: */}
        <Route path='*' element={<h1>404</h1>} />
      </Route>

      {/* Login form page: */}
      <Route path='/login' element={null} />
    </Routes>
  </>
}

export default App