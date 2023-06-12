import { Button } from 'react-bootstrap'

export interface IAppMenu {
    habitsList: {
        name: string
        icon?: string
    }[]
}

const AppMenu = ({ habitsList }: IAppMenu) => {
    return <div className='fixed-top d-flex flex-column h-100 py-5'>
        <div className="py-2"></div>

        <div className="h-100">
            <Button className="btn btn-tr">Pulpit</Button>

            <div className="my-2"></div>

            {
                habitsList.length > 0 ?

                    habitsList.map(habit => {
                        return <Button className='btn btn-tr'>{habit.name}</Button>
                    })

                    :

                    <span>Nie śledzisz jeszcze żadnych nawyków...</span>
            }
        </div>

        <div>
            <Button className='btn btn-tr'>Poradniki</Button>

            <Button className='btn btn-tr'>Ustawienia</Button>
        </div>
    </div>
}

export default AppMenu