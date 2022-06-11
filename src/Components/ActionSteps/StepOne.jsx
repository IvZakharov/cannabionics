import styles from './StepsBlock.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { countPlus } from '../../redux/slices/stepsCountSlice';

function StepOne() {
  const dispatch = useDispatch();

  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-80`}>Action plan</h2>

      <p className="d-block fs-32 fw-500 mb-40">Do you have licence?</p>

      <div className={styles.prevNextBtns}>
        <button onClick={() => dispatch(countPlus())} className="button">
          yes
        </button>
        <button onClick={() => dispatch(countPlus())} className="button">
          no
        </button>
      </div>
    </div>
  );
}

export default StepOne;
