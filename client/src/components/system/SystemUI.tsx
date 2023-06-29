import { ReactElement } from 'react'

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

        <div className="app-container">
            {children}
        </div>
    </>
}

export default SystemUI