import { ReactElement } from 'react'
import { Container } from 'react-bootstrap'

import AppNavbar from './AppNavbar'
import AppMenu from './AppMenu'
import Courtain from './Courtain'

type IChildren = {
    children: ReactElement | Array<ReactElement>
}

const SystemUI = ({ children }: IChildren) => {
    return <>
        <AppMenu habitsList={[{ id: 'nauka-jezyka-angielskiego', name: 'Nauka języka angielskiego' }, { id: 'trening2', name: 'Trening' }]} />

        <Courtain />

        <AppNavbar />

        <Container fluid className="app-container p-0">
            {children}
        </Container>
    </>
}

export default SystemUI