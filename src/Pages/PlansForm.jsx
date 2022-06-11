import styles from '../Components/Steps/StepsBlock.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { countReset } from '../redux/slices/stepsCountSlice';

import React from 'react';

import StepsBar from '../Components/StepsBar/StepsBar';

import StepOne from '../Components/Steps/StepOne';
import StepTwo from '../Components/Steps/StepTwo';
import StepThree from '../Components/Steps/StepThree';
import StepFour from '../Components/Steps/StepFour';
import StepFive from '../Components/Steps/StepFive';
import StepSix from '../Components/Steps/StepSix';
import Recommendations from '../Components/Steps/Recommendations';

function PlansForm() {
  const step = useSelector((state) => state.stepsCount.count);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(countReset());
  }, []);

  return (
    <div className={styles.plansForm}>
      <StepsBar step={step} stepCount={7} />

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
              return <Recommendations />;
            default:
              return <div></div>;
          }
        })()}
      </div>
    </div>
  );
}

export default PlansForm;
