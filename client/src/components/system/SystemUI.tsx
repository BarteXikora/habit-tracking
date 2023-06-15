import { ReactElement } from 'react'

import AppNavbar from './AppNavbar'
import AppMenu from './AppMenu'

type IChildren = {
    children: ReactElement | Array<ReactElement>
}

const SystemUI = ({ children }: IChildren) => {
    return <>
        <AppNavbar />

        <AppMenu habitsList={[{ name: 'Nauka języka angielskiego' }, { name: 'Trening' }]} />

        {children}
    </>
}

export default SystemUI