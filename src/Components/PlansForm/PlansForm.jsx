import styles from './PlansForm.module.scss';
import StepsBar from '../StepsBar/StepsBar';
import BusinessOrSturtup from './BusinessOrSturtup';
import TellUs from './TellUs';
import WantToDo from './WantToDo';
import HowDoYou from './HowDoYou';
import InputData from './InputData';
import Recommendations from './Recommendations';
import React from 'react';

function PlansForm() {
  const [step, setStep] = React.useState(0);
  // const [showNextButton, setShowNextButton] = React.useState(true);
  console.log(step);

  return (
    <div className={styles.plansForm}>
      <StepsBar step={step} />

      <div className={styles.formContent}>
        {(() => {
          switch (step) {
            case 0:
              return <BusinessOrSturtup />;
            case 1:
              return <TellUs />;
            case 2:
              return <WantToDo />;
            case 3:
              return <HowDoYou />;
            case 4:
              return <InputData />;
            case 5:
              return <Recommendations step={() => setStep()} />;
            default:
              return <div></div>;
          }
        })()}
      </div>

      {step < 5 ? (
        <div className={styles.buttons}>
          {step ? (
            <button onClick={() => setStep(step - 1)} className="button">
              &#60; back
            </button>
          ) : null}

          <button onClick={() => setStep(step + 1)} className="button">
            next &#62;
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default PlansForm;
