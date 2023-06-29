import { useState } from 'react'
import { Dropdown, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import iconUser from '../../img/icon-user.svg'
import iconSettings from '../../img/icon-settings.svg'
import iconLogout from '../../img/icon-logout.svg'

export interface IUserButton {
    userName: string
}

const UserButton = ({ userName }: IUserButton) => {
    const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false)
    const navigate = useNavigate()

    return <Dropdown show={isDropdownShown} onToggle={() => setIsDropdownShown(!isDropdownShown)}>
        <Dropdown.Toggle className='d-none d-lg-flex btn btn-tr p-0 ps-3'>
            <span>{userName}</span>

            <div className="icon-user ms-2 p-1">
                <img src={iconUser} alt='Miniatura avatara użytkownika.' />
            </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className='w-100 px-2'>
            <hr className='mt-0 mb-2' />

            <Button
                className='btn btn-tr btn-icon-text w-100'
                onClick={() => {
                    navigate('/settings')
                    setIsDropdownShown(false)
                }}
            >
                <img src={iconSettings} alt='Ustawienia konta' />

                Ustawienia konta
            </Button>

            <Button
                className='btn btn-tr btn-icon-text w-100'
                onClick={() => {
                    setIsDropdownShown(false)
                }}
            >
                <img src={iconLogout} alt='Wyloguj się' />

                Wyloguj się
            </Button>
        </Dropdown.Menu>
    </Dropdown>
}

export default UserButton