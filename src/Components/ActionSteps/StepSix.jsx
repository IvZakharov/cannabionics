import styles from './StepsBlock.module.scss';
import React from 'react';

import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepSix() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-80`}>Action plan</h2>

      <p className="d-block fs-32 fw-500 mb-60">Marketing</p>

      <div className={`${styles.row} d-flex gap-70 mb-60`}>
        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">GOALS</p>
          <p className="d-block fs-32 fw-500 mb-40">Set up marketing goals.</p>
          <p className="tt-up fs-17 fw-500 primary mb-20">PRICE</p>
          <p className="d-block fs-32 fw-500 mb-40">Agree the end price with the stores.</p>
          <p className="tt-up fs-17 fw-500 primary mb-20">EXPENSES</p>
          <p className="d-block fs-32 fw-500 mb-40">
            You will need at least <span className="primary">$90,000</span> for <br /> marketing
            activities.
          </p>
        </div>

        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">COMMUNICATION CHANNELS</p>
          <p className="d-block fs-32 fw-500 mb-50">Here’s how you split the budget:</p>
          <ul className="ls-dot">
            <li className="fs-24 fw-500 mb-20 td-underline">
              In-store - <span className="primary">47%</span>{' '}
            </li>
            <li className="fs-24 fw-500 mb-20 td-underline">
              Community management - <span> className='primary'23%</span>{' '}
            </li>
            <li className="fs-24 fw-500 mb-20 td-underline">
              PR - <span className="primary">18%</span>{' '}
            </li>
            <li className="fs-24 fw-500 mb-20 td-underline">
              Partners - <span className="primary">12%</span>{' '}
            </li>
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

export default StepSix;
