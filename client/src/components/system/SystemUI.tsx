import { ReactElement } from 'react'

type IChildren = {
    children: ReactElement | Array<ReactElement>
}

const SystemUI = ({ children }: IChildren) => {
    return <>
        {children}
    </>
}

export default SystemUI