import { useEffect } from 'react'

interface cssAnimation {
    element: HTMLElement | null
    animations: {
        on: any
        steps: {
            delay?: number
            addClass?: string[]
            remClass?: string[]
        }[]
    }[]
}

const useCssAnimate = (wake: any, data: cssAnimation[]) => {
    useEffect(() => {
        data.forEach(animation => {
            const element = animation.element

            if (element === null) return

            animation.animations.forEach(trigger => {
                let condition = false

                if (wake === trigger.on) condition = true

                if (condition) {
                    trigger.steps.forEach(step => {
                        const delay = step.delay || 0

                        setTimeout(() => {
                            if (step.addClass) step.addClass.forEach(ac => element.classList.add(ac))
                            if (step.remClass) step.remClass.forEach(rc => element.classList.remove(rc))
                        }, delay)
                    })
                }
            })

        })

    }, [wake])

    return true
}

export default useCssAnimate




/*



const useCssAnimate = (wake, animations) => {
    useEffect(() => {
        animations.forEach((animationsSet) => {
            if (animationsSet.element !== null) {
                const toDo = wake ? animationsSet.onTrue : animationsSet.onFalse

                toDo.forEach((step) => {
                    setTimeout(() => {
                        if (step.addClass) step.addClass.forEach((addClass) =>
                            animationsSet.element.classList.add(addClass)
                        )

                        if (step.removeClass) step.removeClass.forEach((removeClass) =>
                            animationsSet.element.classList.remove(removeClass)
                        )

                    }, step.delay)
                })
            }
        })

    }, [wake])

    return true
}



*/