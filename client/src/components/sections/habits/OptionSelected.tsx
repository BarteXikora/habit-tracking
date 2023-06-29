import { useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { useAppDispatch } from '../../../functions/reduxStore'
import { addNote } from '../../../features/habits'

import iconDoneColored from '../../../img/icon-done-colored.svg'
import iconNotDoneColored from '../../../img/icon-not-done-colored.svg'
import iconNotApplicableColored from '../../../img/icon-not-applicable-colored.svg'
import iconNoteAdded from '../../../img/icon-note-added.svg'

import { IHabitCard } from './HabitCard'

const OptionSelected = ({ habit }: IHabitCard) => {
    const dispatch = useAppDispatch()
    const [note, setNote] = useState<string>('')

    return <>
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

        {
            habit.note ?
                <div className='d-flex align-items-center mt-2 font-gray'>
                    <img src={iconNoteAdded} alt="Dodano notatkę!" className='me-1' />
                    <span>
                        {
                            habit.note.length < 80 ?
                                habit.note
                                :
                                habit.note.substring(0, 80) + '...'
                        }
                    </span>
                </div>

                :

                <div className='text-end text-md-start'>
                    <FormControl
                        placeholder='Możesz dodać notatkę...'
                        className='mt-3'
                        value={note}
                        onChange={e => setNote(e.target.value)}
                    />

                    {
                        note.length > 0 && <Button
                            className="btn btn-prim mt-2 d-inline-block"
                            onClick={() => dispatch(addNote({ id: habit.id, note }))}
                        >
                            Dodaj notatkę!
                        </Button>
                    }
                </div>
        }
    </>
}

export default OptionSelected