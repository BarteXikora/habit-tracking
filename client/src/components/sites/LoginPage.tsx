import { Navigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../functions/reduxStore'
import { login } from '../../features/user'

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn: boolean = useAppSelector((state) => state.user.isLoggedIn)

    if (isLoggedIn) return <Navigate to={'/'} />

    return <>
        login page

        <br />

        <button onClick={() => dispatch(login(null))}>Log In</button>
    </>
}

export default LoginPage