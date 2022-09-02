import React from 'react'

const OnboardingStep4 = ({ setCurrentStep, signupData, setSignupData }) => {

  const onSubmit = () => {
    alert("Completed.")
  };

  return (
    <>
      <div className='onboarding-container__content__header'>
        <span className='onboarding-container__content__header__tickicon mb-5 mt-4'>
          <span>✓</span>
        </span>
        <h3>Congratulations, {signupData?.displayName}!</h3>
        <h6>You have completed onboarding, you can start using the {signupData?.workspaceName}!.</h6>
      </div>

      <div className='onboarding-container__content__form'>
        <button className='btn btn-primary btn-full-width mt-1' onClick={onSubmit}>
          Launch {signupData?.workspaceName}
        </button>
      </div>
    </>
  )
}

export default OnboardingStep4