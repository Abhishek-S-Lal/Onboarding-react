import React, { useState } from 'react'
import { SelectionCard } from '../../components/SelectionCard/SelectionCard';
import InduvidualIcon from "../../assets/icons/user-solid.svg"
import InduvidualIconSelected from "../../assets/icons/user-solid-blue.svg"
import TeamIcon from "../../assets/icons/users-solid.svg"
import TeamIconSelected from "../../assets/icons/users-solid-blue.svg"

const OnboardingStep3 = ({ setCurrentStep, signupData, setSignupData }) => {

  const WORKSPACE_TYPES = {INDUVIDUAL:"induvidual", TEAM: "team"}

  const [workspaceType, setWorkspaceType] = useState(WORKSPACE_TYPES.INDUVIDUAL);

  const onSubmit = () => {
    setSignupData({...signupData, workspaceType: workspaceType})
    setCurrentStep(4);
  };

  return (
    <>
      <div className='onboarding-container__content__header'>
        <h3>How are you planning to use {signupData?.workspaceName}?</h3>
        <h6>We'll streamline your setup experience accordingly.</h6>
      </div>

      <div className='onboarding-container__content__form'>
        <div className="selection-cards mb-3">
          <div
            className="select-card disabledbutton"
            role="button"
            tabIndex="0"
            onClick={()=>setWorkspaceType(WORKSPACE_TYPES.INDUVIDUAL)}
          >
            <SelectionCard
              title="For myself"
              description="Write better. Think more clearly. Stay organized."
              selected={workspaceType === WORKSPACE_TYPES.INDUVIDUAL}
              chosenLogo={workspaceType === WORKSPACE_TYPES.INDUVIDUAL ? InduvidualIconSelected : InduvidualIcon}
            />
          </div>
          <div
            className="select-card"
            role="button"
            tabIndex="1"
            onClick={()=>setWorkspaceType(WORKSPACE_TYPES.TEAM)}
          >
            <SelectionCard
              title="With my team"
              description="Wikis, docs, tasks &amp; projects, all in one place."
              selected={workspaceType === WORKSPACE_TYPES.TEAM}
              chosenLogo={workspaceType === WORKSPACE_TYPES.TEAM ? TeamIconSelected : TeamIcon}
            />
          </div>
        </div>
        <button className='btn btn-primary btn-full-width mt-1' onClick={onSubmit}>
          Create Workspace
        </button>
      </div>
    </>
  )
}

export default OnboardingStep3