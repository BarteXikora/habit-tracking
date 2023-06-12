import { ReactElement } from 'react'

import AppNavbar from './AppNavbar'

type IChildren = {
    children: ReactElement | Array<ReactElement>
}

const SystemUI = ({ children }: IChildren) => {
    return <>
        <AppNavbar />

        {children}
    </>
}

export default SystemUI