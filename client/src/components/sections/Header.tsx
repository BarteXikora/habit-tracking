import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import iconStepByStep from '../../img/icon-step-by-step.svg'
// import iconOverdue from '../../img/icon-time.svg'
import iconDone from '../../img/icon-done-white.svg'

import moment from 'moment'
import 'moment/locale/pl'

const Header = () => {
    const date: string = moment().format('dddd, D MMMM')
    const formatedDate = date.charAt(0).toUpperCase() + date.slice(1)

    const navigate = useNavigate()

    return <div className='app-header p-5 text-center text-md-start'>
        <div className="py-3">
            <h1 className='py-2 m-0'>{formatedDate}</h1>

            <div className="d-flex mt-3">
                <Button
                    className='btn btn-white btn-icon-text me-3 mb-1'
                    onClick={() => navigate('/step-by-step')}
                >
                    <img src={iconStepByStep} alt="Przejdź do uzupełniania dnia" />

                    Uzupełnij ten dzień!
                </Button>

                {/* <Button className='btn btn-warn btn-icon-text me-3 mb-1'>
                    <img src={iconOverdue} alt="Uzupełnij zaległe dni" />

                    Uzupełnij zaległe!
                </Button> */}
            </div>

            <div className="__d-flex d-none align-items-center">
                <img src={iconDone} alt="Wszystko gotowe!" className='me-2 mb-1' />

                <span className='fw-bold f-big'>Wszystko gotowe!</span>
            </div>
        </div>
    </div>
}

export default Header