import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '../../components/FormInput/FormInput';

const OnboardingStep2 = ({setCurrentStep, signupData, setSignupData}) => {
  const methods = useForm({
    mode: "onBlur",
  });

  const onSubmit = methods.handleSubmit((values) => {
    if (values) {
      //  console.log(values);
       setSignupData({...signupData, workspaceName: values?.workspaceName, workspaceUrl: values?.workspaceUrl})
    }
    setCurrentStep(3);
  });

  return (
    <FormProvider {...methods}>
      <form>
        <div className='onboarding-container__content__header'>
          <h3>Let's set up a home for all your work</h3>
          <h6>You can always create another workspace later.</h6>
        </div>

        <div className='onboarding-container__content__form'>
          <div className='mb-4'>
            <FormInput
              id="workspaceName"
              name="workspaceName"
              type="text"
              required
              label="Workspace Name"
              placeholder="Eden"
            />
          </div>
          <div className='mb-4'>
            <FormInput
              id="workspaceUrl"
              name="workspaceUrl"
              type="text"
              label="Workspace URL"
              prefix="www.eden.com/"
              placeholder="Example"
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

export default OnboardingStep2