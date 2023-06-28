import { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import HabitCard from './habits/HabitCard'
import { useAppSelector } from '../../functions/reduxStore'

import iconAdd from '../../img/icon-add-white.svg'

const HabitsCardsSection = () => {
    const navigate = useNavigate()

    const habitsList = useAppSelector(state => state.habits)

    const countLeft = (): number => {
        let cnt = 0

        habitsList.forEach(habit => { if (!habit.selectedOption) cnt++ })

        return cnt
    }

    const [left, setLeft] = useState<number>(countLeft())

    useEffect(() => {
        setLeft(countLeft())

    }, [habitsList])

    return <Row className='px-2 px-sm-4 py-5'>
        <Col xs={12} className='d-flex align-items-center flex-column flex-sm-row mb-4 justify-content-center justify-content-md-start'>
            <h2 className='m-0'>Śledzone nawyki:</h2>

            <div className={`title-left-habits ${left > 0 && 'title-left-habits-warn'} py-1 px-3 ms-3 mt-2 mt-sm-0`}>
                {left > 0 ? left + ' do uzupełnienia!' : 'Gotowe!'}
            </div>
        </Col>

        {
            habitsList.map(habit => {
                return <HabitCard key={habit.id} habit={habit} />
            })
        }

        <Col className='text-end text-sm-center text-md-start'>
            <Button className='btn btn-prim btn-icon-text d-inline-block' onClick={() => navigate('/add')}>
                <img src={iconAdd} alt="Dodaj" />

                Dodaj nowy nawyk
            </Button>
        </Col>
    </Row>
}

export default HabitsCardsSection