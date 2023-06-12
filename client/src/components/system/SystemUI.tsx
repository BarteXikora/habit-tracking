import { ReactElement } from 'react'

import AppNavbar from './AppNavbar'
import AppMenu from './AppMenu'

type IChildren = {
    children: ReactElement | Array<ReactElement>
}

const SystemUI = ({ children }: IChildren) => {
    return <div>
        <AppNavbar />

        {/* <AppMenu habitsList={[]} /> */}

        <AppMenu habitsList={[{ name: 'Nauka języka angielskiego' }, { name: 'Trening' }]} />

        {children}
    </div>
}

export default SystemUI