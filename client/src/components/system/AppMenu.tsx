import { Container, Button } from 'react-bootstrap'

import iconDashboard from '../../img/icon-dashboard.svg'
import iconLearn from '../../img/icon-learn.svg'
import iconAdd from '../../img/icon-add.svg'
import iconNoIcon from '../../img/icon-no-icon.svg'

export interface IAppMenu {
    habitsList: {
        name: string
        icon?: string
    }[]
}

const AppMenu = ({ habitsList }: IAppMenu) => {
    return <div className='app-menu fixed-top d-flex flex-column h-100 py-5 px-4'>
        <Container fluid>
            <div className="py-3"></div>

            <div className="h-100">
                <h2>Menu:</h2>

                <Button className="btn btn-tr w-100">
                    <img src={iconDashboard} alt='Pulpit' />

                    Pulpit
                </Button>

                <Button className='btn btn-tr w-100'>
                    <img src={iconLearn} alt='Poradniki' />

                    Poradniki
                </Button>

                <hr className='my-4' />

                <h2>Śledzone nawyki:</h2>

                <Button className='btn btn-tr w-100 mb-2'>
                    <img src={iconAdd} alt='Dodaj śledzenie nawyku' />

                    Dodaj nowe
                </Button>

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

            {/* <div>
    <hr className='my-4' />

    <Button className='btn btn-tr w-100'>
        <img src={iconSettings} alt='Ustawienia' />

        Ustawienia
    </Button>
</div> */}
        </Container>

    </div>
}

export default AppMenu