import { Button } from 'react-bootstrap'

import iconUser from '../../img/icon-user.png'

export interface IUserButton {
    userName: string
}

const UserButton = ({ userName }: IUserButton) => {
    return <Button className='btn btn-tr p-0 ps-3'>
        <span>{userName}</span>

        <div className="icon-user ms-3 p-1">
            <img src={iconUser} alt='Miniatura avatara użytkownika.' className='pb-1' />
        </div>
    </Button>
}

export default UserButton