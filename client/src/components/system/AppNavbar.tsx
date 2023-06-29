import { Navbar, Container, Button } from 'react-bootstrap'
import UserButton from './UserButton'
import Logo from './Logo'

import iconMenu from '../../img/icon-menu.svg'
import { useAppDispatch } from '../../functions/reduxStore'
import { toggleMenu } from '../../features/menu'

const AppNavbar = () => {
    const dispatch = useAppDispatch()

    return <Navbar className='fixed-top py-1 px-4'>
        <Container fluid className='p-0'>
            <Button
                className='d-flex d-lg-none btn btn-prim me-3 p-2'
                onClick={() => dispatch(toggleMenu({ type: 'show' }))}
            >
                <img src={iconMenu} alt='Menu' />
            </Button>

            <Logo />

            <UserButton userName='Nazwa użytkownika' />
        </Container>
    </Navbar>
}

export default AppNavbar