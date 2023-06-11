import { Navbar, Container } from 'react-bootstrap'

import imgLogo from '../../img/logo.png'

const AppNavbar = () => {
    return <Navbar>
        <Container>
            <Navbar.Brand>
                <img src={imgLogo} alt='goodhabit' width={35} />

                <span>goodhabit</span>
            </Navbar.Brand>
        </Container>
    </Navbar>
}

export default AppNavbar