import { Navbar, Container } from 'react-bootstrap'
import UserButton from './UserButton'

import imgLogo from '../../img/logo.png'

const AppNavbar = () => {
    return <Navbar className='py-1 px-4'>
        <Container fluid>
            <Navbar.Brand className='d-flex'>
                <img src={imgLogo} alt='goodhabit' width={35} className='me-2' />

                <span>goodhabit</span>
            </Navbar.Brand>

            <UserButton />
        </Container>
    </Navbar>
}

export default AppNavbar