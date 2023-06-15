import { Navbar, Container } from 'react-bootstrap'
import UserButton from './UserButton'

import imgLogo from '../../img/logo.svg'

const AppNavbar = () => {
    return <Navbar className='fixed-top py-1 px-4'>
        <Container fluid>
            <Navbar.Brand className='d-flex'>
                <img src={imgLogo} alt='goodhabit' width={35} className='me-2' />

                <span>goodhabit</span>
            </Navbar.Brand>

            <UserButton userName='Nazwa użytkownika' />
        </Container>
    </Navbar>
}

export default AppNavbar