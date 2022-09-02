import React from 'react'
import PropTypes from 'prop-types'
import "./HorizontalStepper.scss"

import clsx from 'clsx'

const HorizontalStepper = props => {

    const { steps, currentStep } = props;
    
    return (<div className="c-stepper">
        {steps.map((step, index) => {
            return (
                <div className={clsx("c-stepper__item", index < currentStep ? "c-stepper__item-completed" : "c-stepper__item-pending")}>
                    <span className={clsx("c-stepper__stepnumber",
                      index < currentStep && "c-stepper__stepnumber-completed",
                      step?.onClick && "cursor-pointer")}
                      onClick={step?.onClick}>
                      <span>{step?.content ? step?.content?.charAt(0) : index+1 }</span>
                    </span>
                    {step?.title && <h3 className="c-stepper__title">{step?.title}</h3>}
                    {step?.description && <p className="c-stepper__desc">{step?.description}</p>}
                </div>
            )
        })}
    </div>
    )
}

HorizontalStepper.propTypes = {
    steps: PropTypes.array,
    currentStep: PropTypes.number
}

export default HorizontalStepper