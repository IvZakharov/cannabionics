import styles from './StepsBlock.module.scss';
import React from 'react';

import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepFive() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-80`}>Action plan</h2>

      <p className="d-block fs-32 fw-500 mb-60">Make sure stores have your product in time:</p>

      <div className={`${styles.row} d-flex gap-120 mb-60`}>
        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">PRODUCTION</p>
          <p className="d-block fs-32 fw-500 mb-30">
            Set up production for the amount of <br /> <span className="primary">3471</span> units
            in place :
          </p>
          <ul className="ls-dot">
            <li className="fs-24 fw-500 mb-20 td-underline">Modernize commodities supply</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Hone your business processes</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Choose your producer wisely</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Simplify your delivery model</li>
          </ul>
        </div>

        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">DELIVERY</p>
          <p className="d-block fs-32 fw-500 mb-60">Arrange the delivery.</p>
          <button className="button button--transparent">FIND NEW DELIVERY AGENT</button>
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

export default StepFive;
