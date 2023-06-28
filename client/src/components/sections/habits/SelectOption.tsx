import { Button } from 'react-bootstrap'
import { IHabitCard } from './HabitCard'
import { useAppDispatch } from '../../../functions/reduxStore'
import { selectOption } from '../../../features/habits'

import iconDone from '../../../img/icon-done.svg'
import iconNotDone from '../../../img/icon-not-done.svg'
import iconNotApplicable from '../../../img/icon-not-applicable.svg'

const SelectOption = ({ habit }: IHabitCard) => {
    const dispatch = useAppDispatch()

    return <>
        <span className="fw-bold d-block mb-2">Dostępne oznaczenia:</span>

        <div className="text-end text-sm-start">
            {
                habit.options.length > 0 ?

                    habit.options.map(option => {
                        return <Button
                            className={`btn btn-option btn-option-${option} p-2 d-inline-block me-2 mb-1`}
                        >
                            <img
                                src={
                                    option === 'done' ? iconDone : option === 'not-done' ? iconNotDone : iconNotApplicable
                                }
                                alt=""
                                onClick={() => dispatch(selectOption({ id: habit.id, option }))}
                            />
                        </Button>
                    })

                    :

                    <>Brak dostępnych opcji</>
            }
        </div>
    </>
}

export default SelectOption