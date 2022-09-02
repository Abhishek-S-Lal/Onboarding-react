import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput/FormInput';

const OnboardingStep1 = ({setCurrentStep, signupData, setSignupData}) => {

  const methods = useForm({
    mode: "onBlur",
  });

  const onSubmit = methods.handleSubmit((values) => {
    if (values) {
      //  console.log(values);
       setSignupData({...signupData, fullName: values?.fullName, displayName: values?.displayName})
    }
    setCurrentStep(2);
  });

  return (
    <FormProvider {...methods}>
      <form>
        <div className='onboarding-container__content__header'>
          <h3>Welcome! First things first...</h3>
          <h6>You can always change them later.</h6>
        </div>

        <div className='onboarding-container__content__form'>
          <div className='mb-4'>
            <FormInput
              id="fullName"
              name="fullName"
              type="text"
              required
              label="Full Name"
              placeholder="Steve Jobs"
            />
          </div>
          <div className='mb-4'>
            <FormInput
              id="displayName"
              name="displayName"
              type="text"
              required
              label="Display Name"
              placeholder="Steve"
            />
          </div>
          <button className='btn btn-primary btn-full-width mt-1' onClick={onSubmit}>
            Create Workspace
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default OnboardingStep1