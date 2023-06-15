import { ReactElement } from 'react'

import AppNavbar from './AppNavbar'
import AppMenu from './AppMenu'

type IChildren = {
    children: ReactElement | Array<ReactElement>
}

const SystemUI = ({ children }: IChildren) => {
    return <>
        <AppNavbar />

        <AppMenu habitsList={[{ id: 'nauka-jezyka-angielskiego', name: 'Nauka języka angielskiego' }, { id: 'trening2', name: 'Trening' }]} />

        {children}
    </>
}

export default SystemUI