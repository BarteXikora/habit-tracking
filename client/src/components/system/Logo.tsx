import { Navbar } from 'react-bootstrap'
import imgLogo from '../../img/logo.svg'

const Logo = () => {
    return <Navbar.Brand className='d-flex me-auto'>
        <img src={imgLogo} alt='goodhabit' width={35} className='me-2' />

        <span>goodhabit</span>
    </Navbar.Brand>
}

export default Logo