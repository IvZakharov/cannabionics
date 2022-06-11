import styles from './StepsBlock.module.scss';
import React from 'react';

function StepEight() {
  return (
    <div className={styles.stepsBlock}>
      <h2 className={`${styles.title} mb-80`}>Action plan</h2>

      <p className="d-block fs-32 fw-500 mb-40">Contact us if you’re in trouble:</p>

      <div className={`${styles.row} d-flex gap-70 mb-60`}>
        <div>
          <p className="tt-up fs-17 fw-500 primary mb-20">CONSULTANCY</p>
          <p className="d-block fs-32 fw-500 mb-40">What consultancy do you need?</p>

          <ul className="ls-dot">
            <li className="fs-24 fw-500 mb-20 td-underline">Marketing</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Finance</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Business development</li>
            <li className="fs-24 fw-500 mb-20 td-underline">Cannabis education</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StepEight;
