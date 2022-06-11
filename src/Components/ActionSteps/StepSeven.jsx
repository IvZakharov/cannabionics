import styles from './StepsBlock.module.scss';
import React from 'react';

import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepSeven() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-80`}>Action plan</h2>

      <p className="d-block fs-32 fw-500 mb-40">Review your Financials:</p>

      <div className={`${styles.row} d-flex gap-70 mb-60`}>
        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">FINANCIAL PLANNING</p>
          <p className="d-block fs-32 fw-500 mb-40">
            Review your <span className="primary"> P&L </span>before you start.
          </p>
          <p className="tt-up fs-17 fw-500 primary mb-20">PRICE</p>
          <p className="d-block fs-32 fw-500 mb-40">
            Review your <span className="primary"> NET revenue.</span>
          </p>
        </div>
      </div>

      <div className={styles.prevNextBtns}>
        <button onClick={() => dispatch(countMinus())} className="button">
          &#60; back
        </button>
        <button onClick={() => dispatch(countPlus())} className="button">
          next &#62;
        </button>
      </div>
    </div>
  );
}

export default StepSeven;
