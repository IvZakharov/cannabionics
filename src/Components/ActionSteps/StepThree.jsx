import styles from './StepsBlock.module.scss';
import React from 'react';

import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepThree() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-80`}>Action plan</h2>

      <p className="d-block fs-32 fw-500 mb-40">Do you have licence?</p>

      <div className={`${styles.row} d-flex gap-150 mb-60`}>
        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">MONEY</p>
          <p className="fs-32 fw-500 mb-60">
            You will need at least <span className="primary">$180.000.</span>{' '}
          </p>
          <button className="button button--transparent">I WANT TO OPEN CREDIT LINE</button>
        </div>

        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">PEOPLE</p>
          <p className="fs-32 fw-500 d-block mb-30">You will need:</p>
          <ul className="ls-dot">
            <li className="fs-24 fw-500 mb-20">a Sales Representative</li>
            <li className="fs-24 fw-500 mb-20">a Social Media Marketer</li>
          </ul>
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

export default StepThree;
