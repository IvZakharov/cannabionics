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
import StepSeven from '../Components/Steps/StepSeven'
import Recommendations from '../Components/Steps/Recommendations';
import StepEight from "../Components/Steps/StepEight";

function PlansForm() {
  const step = useSelector((state) => state.stepsCount.count);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(countReset());
  }, []);

  return (
    <div >
      <StepsBar step={step} stepCount={9} />

      <div >
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

            case 8:
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
