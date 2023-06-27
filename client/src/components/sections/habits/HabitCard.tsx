import { Col } from 'react-bootstrap'
import { Habits } from '../../../features/habits'
import OptionSelected from './OptionSelected'
import SelectOption from './SelectOption'

import iconNoIcon from '../../../img/icon-no-icon.svg'

export interface IHabitCard {
    habit: Habits
}

const HabitCard = ({ habit }: IHabitCard) => {
    return <Col md={4} className='d-grid px-2 pb-4'>
        <div className={`
            habit-card-${habit.selectedOption ?

                habit.selectedOption === 'done' ?
                    'good'
                    :
                    habit.selectedOption === 'not-done' ?
                        'wrong'
                        :
                        'gray'

                :

                'warn'
            }
            section-gray-3 px-4 pt-3 pb-4
        `}>
            <h3 className='d-flex align-items-center'>
                <img src={habit.icon || iconNoIcon} alt={habit.name} className='me-2' />

                {habit.name}
            </h3>

            {
                habit.selectedOption ?

                    <OptionSelected habit={habit} />

                    :

                    <SelectOption habit={habit} />
            }
        </div>
    </Col>
}

export default HabitCard