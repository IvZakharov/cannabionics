import styles from '../Components/ActionSteps/StepsBlock.module.scss';
import StepsBar from '../Components/StepsBar/StepsBar';
import React from 'react';

import StepOne from '../Components/ActionSteps/StepOne';
import StepTwo from '../Components/ActionSteps/StepTwo';
import StepThree from '../Components/ActionSteps/StepThree';
import StepFour from '../Components/ActionSteps/StepFour';
import StepFive from '../Components/ActionSteps/StepFive';
import StepSix from '../Components/ActionSteps/StepSix';
import StepSeven from '../Components/ActionSteps/StepSeven';
import StepEight from '../Components/ActionSteps/StepEight';

import { useSelector, useDispatch } from 'react-redux';
import { countReset } from '../redux/slices/stepsCountSlice';

function ActionPlan() {
  const step = useSelector((state) => state.stepsCount.count);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(countReset());
  }, []);

  return (
    <div className={styles.plansForm}>
      <StepsBar step={step} stepCount={8} />

      <div className={styles.formContent}>
        {(() => {
          switch (step) {
            case 0:
              return <StepOne />;
            case 1:
              return <StepTwo />;
            case 2:
              return <StepThree />;
            case 3:
              return <StepFour />;
            case 4:
              return <StepFive />;
            case 5:
              return <StepSix />;
            case 6:
              return <StepSeven />;
            case 7:
              return <StepEight />;
            default:
              return <div></div>;
          }
        })()}
      </div>
    </div>
  );
}

export default ActionPlan;
