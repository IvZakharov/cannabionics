import styles from './StepsBlock.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { countPlus, countMinus } from '../../redux/slices/stepsCountSlice';

function StepFour() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-80`}>Action plan</h2>

      <p className="d-block fs-32 fw-500 mb-60">Get you sales channels in place:</p>

      <div className={`${styles.row} d-flex gap-150 mb-60`}>
        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">DISTRIBUTORS</p>
          <p className="d-block fs-32 fw-500 mb-30">Get you sales channels in place:</p>
          <ul className="ls-dot">
            <li className="fs-24 fw-500 mb-20 td-underline">High-up Distribution</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Big Chunk Supplies</li>
            <li className="fs-24 fw-500 mb-20 td-underline">South West Recreational</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Gaia</li>
          </ul>
        </div>

        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">PEOPLE</p>
          <p className="d-block fs-32 fw-500 mb-30">Get yourself a place in online stores:</p>
          <ul className="ls-dot">
            <li className="fs-24 fw-500 mb-20 td-underline">High-up Distribution</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Big Chunk Supplies</li>
            <li className="fs-24 fw-500 mb-20 td-underline">South West Recreational</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Gaia</li>
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

export default StepFour;
