import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import HabitCard from './habits/HabitCard'
import { useAppSelector } from '../../functions/reduxStore'

const HabitsCardsSection = () => {
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

    return <Row className='px-4 py-5'>
        <Col xs={12} className='d-flex align-items-center mb-4'>
            <h2 className='m-0'>Śledzone nawyki:</h2>

            <div className={`title-left-habits ${left > 0 && 'title-left-habits-warn'} py-1 px-3 ms-3`}>
                {left > 0 ? left + ' do uzupełnienia!' : 'Gotowe!'}
            </div>
        </Col>

        {
            habitsList.map(habit => {
                return <HabitCard key={habit.id} habit={habit} />
            })
        }
    </Row>
}

export default HabitsCardsSection