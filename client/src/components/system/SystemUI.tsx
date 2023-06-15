import { ReactElement } from 'react'

import AppNavbar from './AppNavbar'
import AppMenu from './AppMenu'

type IChildren = {
    children: ReactElement | Array<ReactElement>
}

const SystemUI = ({ children }: IChildren) => {
    return <>
        <AppNavbar />

        <AppMenu habitsList={[{ id: 5, name: 'Nauka języka angielskiego' }, { id: 7, name: 'Trening' }]} />

        {children}
    </>
}

export default SystemUI