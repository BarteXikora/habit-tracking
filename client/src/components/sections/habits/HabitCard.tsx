import { useState } from 'react'
import { Col, Button, FormControl } from 'react-bootstrap'

import iconNoIcon from '../../../img/icon-no-icon.svg'
import iconDone from '../../../img/icon-done.svg'
import iconNotDone from '../../../img/icon-not-done.svg'
import iconNotApplicable from '../../../img/icon-not-applicable.svg'
import iconDoneColored from '../../../img/icon-done-colored.svg'
import iconNotDoneColored from '../../../img/icon-not-done-colored.svg'
import iconNotApplicableColored from '../../../img/icon-not-applicable-colored.svg'
import { useAppDispatch } from '../../../functions/reduxStore'
import { selectOption } from '../../../features/habits'

interface IHabitCard {
    habit: {
        id: string
        name: string
        icon: string | null
        options: string[]
        selectedOption: string | null
    }
}

const HabitCard = ({ habit }: IHabitCard) => {
    const [note, setNote] = useState<string>('')
    const dispatch = useAppDispatch()

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

                    <>
                        <span className="d-flex align-items-center fw-bold">
                            {
                                habit.selectedOption === 'done' ?

                                    <div className='font-good'>
                                        <img src={iconDoneColored} alt="Wykonano" width={25} className='me-1' />
                                        Zadanie wykonane!
                                    </div>

                                    :

                                    habit.selectedOption === 'not-done' ?

                                        <div className='font-wrong'>
                                            <img src={iconNotDoneColored} alt="Nie wykonano" width={25} className='me-1' />
                                            Zadanie niewykonane!
                                        </div>

                                        :

                                        <div className='font-gray'>
                                            <img src={iconNotApplicableColored} alt="Nie dotyczy" width={25} className='me-1' />
                                            Dziś nie dotyczy!
                                        </div>
                            }
                        </span>

                        <FormControl
                            placeholder='Możesz dodać notatkę...'
                            className='mt-3'
                            value={note}
                            onChange={e => setNote(e.target.value)}
                        />

                        {
                            note.length > 0 && <Button className="btn btn-prim mt-2">Dodaj notatkę!</Button>
                        }
                    </>

                    :

                    <>
                        <span className="fw-bold d-block mb-2">Dostępne oznaczenia:</span>

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
                    </>
            }
        </div>
    </Col>
}

export default HabitCard