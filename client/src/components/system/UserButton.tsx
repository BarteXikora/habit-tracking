import { Button } from 'react-bootstrap'

import iconUser from '../../img/icon-user.svg'

export interface IUserButton {
    userName: string
}

const UserButton = ({ userName }: IUserButton) => {
    return <Button className='d-none d-lg-flex btn btn-tr p-0 ps-3'>
        <span>{userName}</span>

        <div className="icon-user ms-2 p-1">
            <img src={iconUser} alt='Miniatura avatara użytkownika.' />
        </div>
    </Button>
}

export default UserButton