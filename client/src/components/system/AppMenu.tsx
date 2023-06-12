import { Button } from 'react-bootstrap'

import iconDashboard from '../../img/icon-dashboard.png'
import iconNoIcon from '../../img/icon-no-icon.png'
import iconLearn from '../../img/icon-learn.png'
import iconSettings from '../../img/icon-settings.png'

export interface IAppMenu {
    habitsList: {
        name: string
        icon?: string
    }[]
}

const AppMenu = ({ habitsList }: IAppMenu) => {
    return <div className='app-menu fixed-top d-flex flex-column h-100 py-5 px-4'>
        <div className="py-3"></div>

        <div className="h-100">
            <Button className="btn btn-tr w-100">
                <img src={iconDashboard} alt="" />

                Pulpit
            </Button>

            <hr className='my-4' />

            {
                habitsList.length > 0 ?

                    habitsList.map(habit => {
                        return <Button className='btn btn-tr w-100'>
                            <img src={habit.icon ? habit.icon : iconNoIcon} alt={`Ikona ${habit.name}`} />

                            {habit.name}
                        </Button>
                    })

                    :

                    <span>Nie śledzisz jeszcze żadnych nawyków...</span>
            }
        </div>

        <div>
            <hr className='my-4' />

            <Button className='btn btn-tr w-100'>
                <img src={iconLearn} alt='Poradniki' />

                Poradniki
            </Button>

            <Button className='btn btn-tr w-100'>
                <img src={iconSettings} alt='Ustawienia' />

                Ustawienia
            </Button>
        </div>
    </div>
}

export default AppMenu