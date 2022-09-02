import React, { useState } from 'react'
import HorizontalStepper from '../../components/HorizontalStepper/HorizontalStepper'
import "./OnboardingPage.scss"
import OnboardingStep1 from './OnboardingStep1';
import OnboardingStep2 from './OnboardingStep2';
import OnboardingStep3 from './OnboardingStep3';
import OnboardingStep4 from './OnboardingStep4';

const OnboardingPage = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [signupData, setSignupData] = useState({});

  // const onClickStepper = (clickedStep) => {
  //   setCurrentStep(clickedStep);
  // }

  const steps = [
    {
      content: "1",
      // onClick: () => onClickStepper(1)
    },
    {
      content: "2",
      // onClick: () => onClickStepper(2)
    },
    {
      content: "3",
      // onClick: () => onClickStepper(3)
    },
    {
      content: "4",
      // onClick: () => onClickStepper(4)
    }];

  return (
    <div className='onboarding-container container'>
      <header className='onboarding-container__header'>
        <img width={150} height={50} src='assets/images/logo-with-bg.png' alt='logo' />
      </header>
      <div className='onboarding-container__stepper'>
        <HorizontalStepper steps={steps} currentStep={currentStep} />
      </div>
      <section className='onboarding-container__content'>
        {currentStep === 1 ?
          <OnboardingStep1 setCurrentStep={setCurrentStep} signupData={signupData} setSignupData={setSignupData} /> :
          currentStep === 2 ?
            <OnboardingStep2 setCurrentStep={setCurrentStep} signupData={signupData} setSignupData={setSignupData} /> :
            currentStep === 3 ?
              <OnboardingStep3 setCurrentStep={setCurrentStep} signupData={signupData} setSignupData={setSignupData} /> :
              currentStep === 4 ?
                <OnboardingStep4 setCurrentStep={setCurrentStep} signupData={signupData} setSignupData={setSignupData} /> : null
        }
      </section>
    </div>
  )
}

export default OnboardingPage