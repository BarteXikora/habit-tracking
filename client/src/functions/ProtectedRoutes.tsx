import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from './reduxStore'

const ProtectedRoutes = () => {
    const isLoggedIn: boolean = useAppSelector((state) => state.user.isLoggedIn)

    // Redirect to login page if user not logged in:
    if (!isLoggedIn) return <Navigate to={'/login'} />

    return <Outlet />
}

export default ProtectedRoutes