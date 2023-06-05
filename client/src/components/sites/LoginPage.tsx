import { Navigate } from 'react-router-dom'

const LoginPage = () => {
    const __log: boolean = false

    if (__log) return <Navigate to={'/'} />

    return <>login page</>
}

export default LoginPage