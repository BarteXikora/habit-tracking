import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const __log: boolean = false

    // Redirect to login page if user not logged in:
    if (!__log) return <Navigate to={'/login'} />

    return <Outlet />
}

export default ProtectedRoutes