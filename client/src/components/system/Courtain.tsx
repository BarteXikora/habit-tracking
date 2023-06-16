import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../functions/reduxStore'
import useCssAnimate from '../../functions/useCssAnimate'
import { toggleMenu } from '../../features/menu'

const Courtain = () => {
    const isShown: boolean = useAppSelector((state) => state.menu.isShown)
    const dispatch = useAppDispatch()

    const courtainRef = useRef(null)
    useCssAnimate(isShown, [{
        element: courtainRef.current,
        animations: [{
            on: true,
            steps: [{ addClass: ['app-courtain-fade-in'], remClass: ['d-none'] }]
        }, {
            on: false,
            steps: [
                { addClass: ['app-courtain-fade-out'] },
                { delay: 200, addClass: ['d-none'], remClass: ['app-courtain-fade-in', 'app-courtain-fade-out'] }
            ]
        }]
    }])

    return <div
        className='app-courtain d-none d-lg-none'
        ref={courtainRef}
        onClick={() => dispatch(toggleMenu({ type: 'hide' }))}
    ></div>
}

export default Courtain