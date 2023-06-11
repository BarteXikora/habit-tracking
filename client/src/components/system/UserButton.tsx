import { Button } from 'react-bootstrap'

import iconUser from '../../img/icon-user.png'

const UserButton = () => {
    return <Button className='btn btn-tr p-0 ps-3'>
        <span>Nazwa użytkownika</span>

        <div className="icon-user ms-3 p-1">
            <img src={iconUser} alt='Miniatura avatara użytkownika.' />
        </div>
    </Button>
}

export default UserButton