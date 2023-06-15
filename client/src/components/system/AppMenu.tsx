import { useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../functions/reduxStore'
import { toggleMenu } from '../../features/menu'
import useCssAnimate from '../../functions/useCssAnimate'
import Logo from './Logo'

import iconDashboard from '../../img/icon-dashboard.svg'
import iconLearn from '../../img/icon-learn.svg'
import iconAdd from '../../img/icon-add.svg'
import iconNoIcon from '../../img/icon-no-icon.svg'
import iconSettings from '../../img/icon-settings.svg'
import iconLogout from '../../img/icon-logout.svg'
import iconX from '../../img/icon-x.svg'

export interface IAppMenu {
    habitsList: {
        id: string
        name: string
        icon?: string
    }[]
}

const isActive = (path: string, element: string): boolean => {
    const pathType = path.substring(1, path.length).split('/')[0]

    if (pathType !== 'habit')
        return pathType === element

    return path.substring(1, path.length) === element
}

const AppMenu = ({ habitsList }: IAppMenu) => {
    const location = useLocation()

    const showMenu: boolean = useAppSelector((state) => state.menu.isShown)
    const dispatch = useAppDispatch()

    const menuRef = useRef(null)

    useCssAnimate(showMenu, [{
        element: menuRef.current,
        animations: [{
            on: true,
            steps: [{ addClass: ['app-menu-shown'], remClass: ['d-none', 'app-menu-hidden'] }]
        }, {
            on: false,
            steps: [{
                addClass: ['app-menu-hidden'], remClass: ['app-menu-shown']
            }, {
                delay: 200, addClass: ['d-none']
            }]
        }]
    }])

    return <div className={`app-menu d-lg-block fixed-top h-100 py-4 px-4`} ref={menuRef}>
        <Button
            className='btn btn-icon btn-wrong btn-close-menu d-flex d-lg-none p-2'
            onClick={() => dispatch(toggleMenu({ type: 'hide' }))}
        >
            <img src={iconX} alt='Zamknij menu' />
        </Button>

        <Container fluid className='d-flex flex-column h-100 px-0'>
            <div className="d-none d-lg-flex py-3"></div>

            <div className="d-flex d-lg-none">
                <Logo />
            </div>

            <div className="h-100 mt-4">
                <Link
                    to='/dashboard'
                    className={`btn btn-tr btn-icon-text ${isActive(location.pathname, 'dashboard') && 'btn-active'} w-100`}
                >
                    <img src={iconDashboard} alt='Pulpit' />

                    Pulpit
                </Link>

                <Link
                    to='/learn'
                    className={`btn btn-tr btn-icon-text ${isActive(location.pathname, 'learn') && 'btn-active'} w-100`}
                >
                    <img src={iconLearn} alt='Poradniki' />

                    Poradniki
                </Link>

                <hr className='my-4' />

                <Link
                    to='/add'
                    className={`btn btn-tr btn-icon-text ${isActive(location.pathname, 'add') && 'btn-active'} w-100 mb-3`}
                >
                    <img src={iconAdd} alt='Dodaj śledzenie nawyku' />

                    Dodaj nowy nawyk
                </Link>

                {
                    habitsList.length > 0 ?

                        habitsList.map(habit => {
                            return (
                                <Link
                                    key={habit.id}
                                    to={`/habit/${habit.id}`}
                                    className={`btn btn-tr btn-icon-text ${isActive(location.pathname, 'habit/' + habit.id) && 'btn-active'} w-100`}
                                >
                                    <img src={habit.icon ? habit.icon : iconNoIcon} alt={`Ikona ${habit.name}`} />

                                    {habit.name}
                                </Link>)
                        })

                        :

                        <span>Nie śledzisz jeszcze żadnych nawyków...</span>
                }
            </div>

            <div>
                <hr className='my-4' />

                <Link
                    to='/settings'
                    className={`btn btn-tr btn-icon-text ${isActive(location.pathname, 'settings') && 'btn-active'} w-100`}
                >
                    <img src={iconSettings} alt='Ustawienia' />

                    Ustawienia
                </Link>

                <Button className='d-flex d-lg-none btn btn-tr btn-icon-text w-100'>
                    <img src={iconLogout} alt='Wyloguj się' />

                    Wyloguj się
                </Button>
            </div>
        </Container>
    </div>
}

export default AppMenu