import { useRef } from 'react'
import { useAppSelector } from '../../functions/reduxStore'
import useCssAnimate from '../../functions/useCssAnimate'

const Courtain = () => {
    const isShown: boolean = useAppSelector((state) => state.menu.isShown)

    const courtainRef = useRef(null)
    useCssAnimate(isShown, [{
        element: courtainRef.current,
        animations: [{
            on: true,
            steps: [{ remClass: ['d-none'] }]
        }, {
            on: false,
            steps: [{
                addClass: ['d-none']
            }]
        }]
    }])

    return <div className='app-courtain d-none' ref={courtainRef}></div>
}

export default Courtain