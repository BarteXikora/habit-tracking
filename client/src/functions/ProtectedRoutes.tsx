import { Outlet, Navigate } from 'react-router-dom'
import { useAppSelector } from './reduxStore'

import SystemUI from '../components/system/SystemUI'

const ProtectedRoutes = () => {
    const isLoggedIn: boolean = useAppSelector((state) => state.user.isLoggedIn)

    // Redirect to login page if user not logged in:
    if (!isLoggedIn) return <Navigate to={'/login'} />

    return <SystemUI><Outlet /></SystemUI>
}

export default ProtectedRoutes